import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslateHistoryItem key={index + '-' + translation} translation={translation} />)

    return (
        <section>
            <h4>Here is your translation history:</h4>
            <ul className="historyList">
                {translationList}
            </ul>
        </section>
    )
}

export default ProfileTranslateHistory;