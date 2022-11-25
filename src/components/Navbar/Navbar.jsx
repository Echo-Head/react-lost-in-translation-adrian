import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    /* const routeChange = () => {
        let path = `/profile`;
        navigate(path);
      }; */

    const { user } = useUser()

    return (
        <div className='navBar'>

            <div className="navTitle">
                <h1 class="animate__animated animate__bounce">The Signs</h1>
            </div>

            {user !== null &&
                <>
                    <div className="navLinks">
                        <NavLink to="profile"><CgProfile /></NavLink>
                        <br />
                        <NavLink to="translate">Translate</NavLink>
                    </div>
                </>
            }
        </div>

    )
}

export default Navbar;