type Props = {
    value: number;
}

export function Show({value}: Props){
    return(
        <div style={{fontSize: "100px"}}>{value}</div>
    )
}