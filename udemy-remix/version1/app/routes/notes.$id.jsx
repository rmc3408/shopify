import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getStoredNotes } from '~/data/server'
import styles from '~/styles/note-details.css'


export default function NoteDetailsPage() {
  const note = useLoaderData()
  console.log('LOADER', note)

  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  )
}

export async function loader({ params }) {
  const notes = await getStoredNotes()
  const noteId = params.id
  const selectedNote = notes.find((note) => note.id === noteId)
  if (!selectedNote) throw json({ message: 'No specific note found' }, { status: 404, statusText: 'No specific note found' })
  return selectedNote
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
