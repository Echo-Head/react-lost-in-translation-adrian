import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {

    const { user } = useUser()

    return (
        <div className='navBar'>

            <div className="navTitle">
                <h1 class="animate__animated animate__bounce">The Signs</h1>
            </div>

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