type Props = {
    value: string;
    onClick: (value: string) => void;
}

export function Kor1({value, onClick}: Props) {
    return (
        <>
            <input type="text" value={value} onChange={(e) => onClick(e.target.value)}/>
        </>
    );
}