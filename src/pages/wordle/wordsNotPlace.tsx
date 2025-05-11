import { Input } from "@/components/ui";

type Props = {
    value: string;

}

export function WordsNotPlace() {
    return (
        <div className="space-y-2">
            <Input placeholder="Буквы не на своих местах" />
            <Input placeholder="Буквы, которых нет" />
        </div>
    );
}