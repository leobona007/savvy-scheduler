
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Scissors, SprayCan, Brush } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  icon: "scissors" | "spray-can" | "brush";
  isSelected: boolean;
  onClick: () => void;
}

const icons = {
  scissors: Scissors,
  "spray-can": SprayCan,
  brush: Brush,
};

export function ServiceCard({ title, price, icon, isSelected, onClick }: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={cn(
        "h-auto p-6 flex flex-col items-center gap-4 hover:border-primary transition-all",
        isSelected && "border-primary bg-primary/5"
      )}
    >
      <Icon className="w-8 h-8" />
      <div className="text-center">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{price}</p>
      </div>
    </Button>
  );
}
