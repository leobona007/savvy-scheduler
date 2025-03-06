
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { User } from "lucide-react";

interface ProfessionalListProps {
  selectedDate: Date;
}

const professionals = [
  { id: 1, name: "João Silva", availableTimes: ["09:00", "10:00", "14:00"] },
  { id: 2, name: "Maria Santos", availableTimes: ["11:00", "13:00", "15:00"] },
  { id: 3, name: "Pedro Costa", availableTimes: ["10:00", "16:00", "17:00"] },
];

export function ProfessionalList({ selectedDate }: ProfessionalListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        Profissionais disponíveis em {format(selectedDate, "d 'de' MMMM", { locale: ptBR })}
      </h3>
      <div className="space-y-4">
        {professionals.map((professional) => (
          <div
            key={professional.id}
            className="border rounded-lg p-4 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <h4 className="font-medium">{professional.name}</h4>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {professional.availableTimes.map((time) => (
                <Button
                  key={time}
                  variant="outline"
                  className="text-sm"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
