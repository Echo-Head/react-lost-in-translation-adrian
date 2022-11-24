import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import profile from "../../assets/profile-image.svg"

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav className='navBar'>

            <div><h1 class="animate__animated animate__bounce">The Signs</h1></div>

            {user !== null &&
                <>
                    <div>
                        <NavLink to="translate">Translate</NavLink>
                    </div>

                    <div>
                        <NavLink to="profile"><img src={profile} alt="" width="30" /></NavLink>
                    </div>
                </>
            }
        </nav>

    )
}

export default Navbar;