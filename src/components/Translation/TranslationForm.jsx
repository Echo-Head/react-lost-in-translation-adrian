import { useState } from "react";
import { useForm } from "react-hook-form";
import { TranslateSubmittedText } from "../../api/Translation"
import { SignsArray } from "../../const/SignArray";
import { useUser } from "../../context/UserContext";

export const translatedArray = [];

const TranslationsForm = () => {
    //Hook
    const { register, handleSubmit } = useForm();

    //Local state
    const { user, setUser } = useUser()
    const [apiError, setApiError] = useState(null);

    const onSubmit = async (data) => {
        translatedArray.length = 0
        let splitString = data.translationText.toLowerCase();
        //These loops will translate users string to sign language
        for (let i = 0; i < splitString.length; i++) {
            for (let j = 0; j < SignsArray.length; j++) {
                if (splitString[i] === SignsArray[j].letter) {
                    translatedArray.push(SignsArray[j])
                }
            }
        }
        if (splitString.length > 0) {
            const [error, result] = await TranslateSubmittedText(user, splitString)
            if (error !== null) {
                setApiError(error);
            }
            if (result !== null) {
                //Adds users string values into global user state
                setUser({
                    ...user,
                    translations: [...user.translations, splitString]
                });
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Please enter a word or letter to be translated:</h3>
                <input
                    type="text"
                    {...register("translationText")}
                    placeholder="Hello"
                />

                <button type="submit">
                    Translate
                </button>
                {apiError && <p>{apiError}</p>}
            </form>
        </div>
    );
};
export default TranslationsForm;
