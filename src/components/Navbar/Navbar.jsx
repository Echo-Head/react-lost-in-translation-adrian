import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {

    const { user } = useUser()

    return (
        <div className="navBar">
            <h1 class="navTitle animate__animated animate__fadeIn">The Signs</h1>

            {user !== null &&
                <>
                    <div className="navLinks">
                        <NavLink to="profile"><button type="button" className="navButtons">Profile</button></NavLink>
                        <br />
                        <NavLink to="translate"><button type="button" className="navButtons">Translate</button></NavLink>
                    </div>
                </>
            }
        </div>

    )
}

export default Navbar;