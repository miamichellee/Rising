import React from "react";
import { Form } from './Form';

const Home = ({handleLogout}) => {
    return(
        <section className="home">
            <nav>
                <h2>Rising</h2>
                <Form />
                <button onClick={handleLogout}>Logout</button>
            </nav>

        </section>
    )
}

export default Home;