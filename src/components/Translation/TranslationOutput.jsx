import { translatedArray } from "./TranslationForm";

const TranslationOutput = () => {

    //Maps through array of sign-language images 
    const availableLetters = translatedArray.map((translatedLetter, index) => {
        return (
            <img key={index} src={translatedLetter.image} alt={translatedLetter.letter} width="60" />
        )
    })

    return (
        <div className="translationBox">
            {availableLetters}
        </div>
    )
}
export default TranslationOutput;