import { Link } from "react-router-dom";
import { MainWindow } from "./main-window";
import { Home } from "lucide-react";

export function Wordle() {
    return (
        <>
            <h1 className="p-6 text-4xl">Wordle page</h1>
            <div className="p-6">
                <Link to="/"><Home /></Link>
            </div>
            <MainWindow />
        </>
    )
}