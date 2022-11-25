import { Link } from "react-router-dom";
import { TranslationClearHistory } from "../../api/Translation";
import { STORAGE_KEY_USER } from "../../const/StorageKeys";
import { useUser } from "../../context/UserContext";
import { StorageDelete, StorageSave } from "../../utils/Storage";

const ProfileActions = ({ logout }) => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            StorageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure?\nThis can not be undone!')) {
            return
        }

        const [clearError] = await TranslationClearHistory(user.id)

        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }

        StorageSave(updatedUser)
        setUser(updatedUser)
    }

    return (
        <div>
            <button className="profileButtons" onClick={handleClearHistoryClick}>Clear History</button>
            <br />
            <button className="profileButtons" onClick={handleLogoutClick}>Logout</button>
        </div>
    )
}

export default ProfileActions;

// <Link to="/translation">Back to translator</Link>