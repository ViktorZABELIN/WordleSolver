import { Buttons } from "./buttons";
import { NoWords } from "./noWords";
import { Result } from "./result";
import { WInPlace } from "./wInPlace";
import { WordsNotPlace } from "./wordsNotPlace";

export function Table() {
    return (
        <>
            <WInPlace />
            <NoWords />
            <WordsNotPlace />
            <Buttons />
            <Result />
        </>

    )

}