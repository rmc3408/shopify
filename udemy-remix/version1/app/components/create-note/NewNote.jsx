import styles from './NewNote.css';
import { Form, useActionData, useNavigation } from '@remix-run/react'

function NewNote() {
  const nav = useNavigation()
  const data = useActionData();

  console.log(data)
  const isSubmitting = nav.state === 'submitting'

  return (
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      {data?.message &&<div>{data.message}</div>}
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button>{isSubmitting ? 'adding...' : 'Add Note'}</button>
      </div>
    </Form>
  );
}

export default NewNote; 

// Surfacing styling 
export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
//Simple exporting
export const link1 = { rel: 'stylesheet', href: styles }