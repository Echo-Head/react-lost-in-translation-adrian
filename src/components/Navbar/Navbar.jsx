import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import profile from "../../assets/profile-image.svg"

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav className='navBar'>
            <h1 class="animate__animated animate__bounce">The Signs</h1>

            {user !== null &&
                <>
                    <span>
                        <NavLink to="translate">Translate</NavLink>
                    </span>

                    <span>
                        <NavLink to="profile"><img src={profile} alt="" width="55" /></NavLink>
                    </span>
                </>
            }
        </nav>

    )
}

export default Navbar;