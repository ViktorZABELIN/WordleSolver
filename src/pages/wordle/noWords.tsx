import { Button, Input } from "@/components/ui";
import { CirclePlus } from "lucide-react";

type Props = {
    value: string;
}

export function NoWords() {
    return (
        <div>
            <div className="grid grid-cols-5 gap-2">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </div>
            <div className="pt-2 flex flex-col">
            <Button variant='default'>
                <CirclePlus /> Добавить ряд символов
            </Button>
            </div>
        </div>
    );
}