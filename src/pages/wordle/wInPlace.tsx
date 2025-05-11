import { Input } from "@/components/ui";

type Props = {
    value: string[];
    setSymPlace: (value: string[]) => void
}

export function WInPlace({ value, setSymPlace}: Props) {
    const setSym = (index: number, sym: string) => {
        value[index] = sym;
        setSymPlace(value);
    }

    return (
        <div>
            <div className="pb-4">Буквы на своём месте</div>
            <div className="grid grid-cols-5 gap-2">
                <Input value={value[0]} maxLength={1} onChange={(e) => setSym(0, e.target.value)} defaultValue={''} />
                <Input value={value[1]} maxLength={1} />
                <Input value={value[2]} maxLength={1} />
                <Input value={value[3]} maxLength={1} />
                <Input value={value[4]} maxLength={1} />
            </div>
        </div>
    );
}