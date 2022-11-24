import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslateHistoryItem key={index + '-' + translation} translation={translation} />)

    return (
        <>
            <h4>Here is your translation history:</h4>
            <ul className="historyList">
                {translationList}
            </ul>
        </>
    )
}

export default ProfileTranslateHistory;