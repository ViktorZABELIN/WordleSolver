type Props = {
    action: () => void;
    label: string;
}

export const Action = ({action, label}: Props) => {
    return <button onClick={() => action()}>{label}</button>;
}