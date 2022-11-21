const PracticeListItem = (props) => {
    return (
        <main>
            <div>
                <li>{props.verdi}</li>
                <li>{props.value}</li>
                <li>{props.coolfunction}</li>
            </div >
        </main >
    )
}

export default PracticeListItem;