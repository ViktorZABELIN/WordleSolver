type Props = {
    value: string;
}

export function Result() {
    return (
        <>
            <h3>Найденные слова</h3>
            <div id="result">
                <div className="text-center"><i>Введите буквы и нажмите "Найти ответы"</i></div>
            </div>
        </>
    );
}