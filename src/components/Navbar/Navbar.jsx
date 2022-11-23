import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {

    const { user } = useUser()
    /* const navigate = useNavigate()

    useEffect(() => {
        if (user !== null) {
            navigate('profile')
        }
    }, [user, navigate]) */

    return (
        <nav className='navBar'>
            <h1 class="animate__animated animate__bounce">The Signs</h1>
            {user !== null &&
                <span className="navButtons">
                    <NavLink to="profile">Profile</NavLink>
                    <br />
                    <NavLink to="/translate">Translations</NavLink>
                </span>
            }
        </nav>

    )
}

export default Navbar;