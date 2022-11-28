import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth"

const Profile = () => {

    const { user } = useUser()

    return (
        <div className="profile animate__animated animate__zoomIn">
            <h2>Profile</h2>
            <ProfileHeader username={user.username} />
            <ProfileTranslateHistory translations={user.translations} />
            <ProfileActions />
        </div>
    )
}

export default withAuth(Profile);