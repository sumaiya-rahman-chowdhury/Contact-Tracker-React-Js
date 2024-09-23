import { Form, redirect, useLoaderData } from "react-router-dom";
import { updateContact } from "./contact";


export async function action({request,params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId,updates);
    return redirect(`/contacts/${params.contactId}`);    
}

export default function EditContacts() {
    const { contact } = useLoaderData();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact?.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact?.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact?.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder=""
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact?.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea name="notes"
                    id=""
                    defaultValue={contact?.notes}
                    rows={6}
                ></textarea>
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </p>
        </Form>
    )
}