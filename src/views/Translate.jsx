import TranslationOutput from "../components/Translation/TranslationOutput";
import TranslationsForm from "../components/Translation/TranslationForm";
import withAuth from "../hoc/withAuth"

const Translate = () => {
    return (
        <div className="translate">
            <h2>Input a letter or word to be translated into ASL:</h2>
            <TranslationOutput />
            <TranslationsForm />
        </div>
    )
}

export default withAuth(Translate);