import React from 'react'
import NewNote, { links as newNotes } from '~/components/create-note/NewNote'
import NoteList, { links as listNotes } from '~/components/list-node/NoteList'
import { json, redirect } from '@remix-run/node'
import { getStoredNotes, storeNotes } from '~/data/server'
import { useLoaderData } from '@remix-run/react'
import { NotesError } from '~/error/notes'
import { NoNotes } from '~/error/catch'

// CLIENT SIDE - GET Request
function Notes() {
  //They can be access in any child component of loaded in the page.
  //const data = useActionData();
  const notes = useLoaderData();

  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  )
}
export default Notes

// SERVER SIDE - NON-GET Request
export async function action(ctx) {
  const formData = await ctx.request.formData()
  const noteData = Object.fromEntries(formData)

  if (formData.get('title').length < 3) {
    return json({ message: 'title is too short'})
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedStore = existingNotes.concat(noteData)

  await storeNotes(updatedStore)

  return redirect('/notes')
}
export async function loader() {
  const existingNotes = await getStoredNotes()

  if (!existingNotes || existingNotes.length === -10) {
    throw json({ message: 'No notes found in the JSON file' }, { status: 404, statusText: 'No note found' })
  }
  return existingNotes
}

export function ErrorBoundary(props) {
  return NotesError(props)
}

export function CatchBoundary() {
  return NoNotes()
}

// Only on PAGES, links function will be called. All styles mixed in this page
export function links() {
  return [
    //_link1, //Import from components/newNote
    ...newNotes(),
    ...listNotes(),
  ]
}

