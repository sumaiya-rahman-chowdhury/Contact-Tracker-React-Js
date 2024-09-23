import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form action="" id="search-form" role="search">
                        <input type="search"
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div className="sr-only"
                            aria-live="polite"
                        >
                        </div>
                    </form>
                    <form action="" method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li><a href={`/contacts/1`}>Tomal Shikdar</a></li>
                        <li><a href={`/contacts/2`}>Anika Mahmud</a></li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet></Outlet>
            </div>
        </>
    )
}