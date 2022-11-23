import withAuth from "../hoc/withAuth"

const Translate = () => {
    return (
        <div className="translate">
            <h1>Translate</h1>
        </div>
    )
}

export default withAuth(Translate);