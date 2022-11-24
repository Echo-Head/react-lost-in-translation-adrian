import withAuth from "../hoc/withAuth"

const Translate = () => {
    return (
        <div className="translate">
            <h2>Translate</h2>
        </div>
    )
}

export default withAuth(Translate);