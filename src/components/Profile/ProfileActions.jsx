import { Link } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/StorageKeys";
import { useUser } from "../../context/UserContext";
import { StorageDelete } from "../../utils/Storage";

const ProfileActions = ({ logout }) => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            // Send an event to the parent
            StorageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><Link to="/translate">Translations</Link></li>
            <li><button>Clear History</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}

export default ProfileActions;