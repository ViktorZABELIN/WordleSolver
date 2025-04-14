type Props = {
    value: number;
    onClick: (value: number) => void;
}


export function Plus({ value, onClick }: Props) {

    return (
        <>
            <button onClick={() => onClick(value+1)}>+</button>
        </>
    )
}