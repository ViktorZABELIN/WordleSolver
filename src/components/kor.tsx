import { useState } from "react";
import { Kor1 } from "./kor1";
import { Kor2 } from "./kor2";

export function Kor() {
    const [b, setB] = useState("virus");
    return (
        <div>
            <Kor1 value={b} onClick={setB}/>
            <Kor2 value={b}/>
        </div>
    );
}