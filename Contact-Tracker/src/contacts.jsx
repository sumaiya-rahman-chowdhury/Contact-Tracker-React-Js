import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "./contact";

export default function Contact() {
    // const contact = {
    //     first: "Tomal",
    //     last: "Shikdar",
    //     avatar: "https://robohash.org/you.png?size=200x200",
    //     twitter: "Tomal_Shikdar",
    //     notes: "Some Notes",
    //     favourate: true
    // }
    const {contact} = useLoaderData() 
    return (
        <>
            <div id="contact">
                <div>
                    <img src={`https://robohash.org/${contact.id}.png?size=200x200`}
                        alt="" key={contact.avatar} />
                </div>
                <div>
                    <h1>{contact.first || contact.last ? (
                        <>
                            {contact.first}{contact.last}
                        </>
                    ) :
                        (
                            <i>No Name</i>
                        )} {" "}
                    </h1>
                    {contact.twitter && (
                        <p>
                            <a href={`https://twitter.com/${contact.twitter}`} target="_blank">
                                {contact.twitter}
                            </a>
                        </p>
                    )
                    }
                    {contact.notes && <p>{contact.notes}</p>}
                    <div>
                        <Form action="edit">
                            <button type="submit">Edit</button>
                        </Form>
                        <Form method="post"
                            action="destroy"
                            onSubmit={(e) => {
                                if (!contact("Olease Confirm")) {
                                    e.preventDefault()
                                }
                            }}
                        >
                            <button type="submit">Delete</button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function loader({params}) {
    const contact = await getContact(params.contactId)
    return {contact}
}






function Favourate ({contact}){
    const favourate = contact.favourate ;
    return(
        <Form method="post">
            <button name="favorite"
            value={favourate ? "false" : "true"}
            aria-label={
                favourate? "Remove from Fav" : "Add to Fav"
            }
            >
                {favourate ? "★" : "☆"}
            </button>
        </Form>
    )
}