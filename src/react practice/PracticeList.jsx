import Film from "./Practice";

const PracticeList = (props) => {
    return (
        <main>
            <div>

                <li>{Film.title}</li>
                <li>{Film.director}</li>
                <li>{Film.year}</li>
            </div >
            <div>
                {props.Child}
            </div>
        </main >
    )
}

export default PracticeList;