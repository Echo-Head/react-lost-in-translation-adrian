import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import profile from "../../assets/profile-image.svg"


/* const HandleProfileClick = () => {
    const { user } = useUser()

    const navigate = useNavigate()

    useEffect(() => {
        if (user !== null) {
            navigate('profile')
        }
    }, [user, navigate])
} */

const Navbar = () => {

    return (
        <nav className='navBar'>
            <h1 class="animate__animated animate__bounce">The Signs</h1>

            <span className="navButtons">
                <NavLink to="profile">Profile</NavLink>
                <br />
                <NavLink to="/translate">Translations</NavLink>
            </span>

        </nav>

    )
}

// <img src={profile} alt="" onClick={HandleProfileClick} />


export default Navbar;