import { Button } from "@/components/ui";

type Props = {
    value: string;
    onClick: (value: string) => void;
}

export function ActionButtons() {
    return (
        <div className="flex flex-col gap-2">
            <Button>Найти ответы</Button>
            <Button>Удалить сохранение</Button>
        </div>
    );
}