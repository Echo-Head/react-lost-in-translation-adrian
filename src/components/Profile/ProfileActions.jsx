import { Link } from "react-router-dom";
import { TranslationClearHistory } from "../../api/Translation";
import { STORAGE_KEY_USER } from "../../const/StorageKeys";
import { useUser } from "../../context/UserContext";
import { StorageDelete } from "../../utils/Storage";

const ProfileActions = ({ logout }) => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            // Send an event to the parent
            StorageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure?\nThis can not be undone!')) {
            return
        }
        const [clearError, clearResult] = await TranslationClearHistory(user.id)
        setUser({

        })
    }

    return (
        <>
            <button onClick={handleClearHistoryClick}>Clear History</button>
            <br />
            <button onClick={handleLogoutClick}>Logout</button>
        </>
    )
}

export default ProfileActions;