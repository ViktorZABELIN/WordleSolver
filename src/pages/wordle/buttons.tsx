type Props = {
    value: string;
    onClick: (value: string) => void;
}

export function Buttons() {
    return<>
        <button>Найти ответы</button>
        <button>Удалить сохранение</button>
    </>
}