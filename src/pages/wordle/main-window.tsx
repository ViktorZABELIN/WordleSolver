import { useState } from "react";
import { ActionButtons } from "./action-buttons";
import { NoWords } from "./noWords";
import { Result } from "./result";
import { WInPlace } from "./wInPlace";
import { WordsNotPlace } from "./wordsNotPlace";

export function MainWindow() {
    const [symPlace, setSymPlace] = useState(['', '', '', '', '']);

    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="space-y-3">
                <WInPlace value={symPlace} setSymPlace={setSymPlace} />
                <WordsNotPlace />
                <ActionButtons />
            </div>
            <div>
                <NoWords />
            </div>
            <div>
                <Result />
            </div>
        </div>
    )

}