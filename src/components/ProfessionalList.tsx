
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProfessionalListProps {
  selectedDate: Date;
}

interface Professional {
  id: number;
  name: string;
  availableTimes: string[];
}

const professionals = [
  { id: 1, name: "João Silva", availableTimes: ["09:00", "10:00", "14:00"] },
  { id: 2, name: "Maria Santos", availableTimes: ["11:00", "13:00", "15:00"] },
  { id: 3, name: "Pedro Costa", availableTimes: ["10:00", "16:00", "17:00"] },
];

export function ProfessionalList({ selectedDate }: ProfessionalListProps) {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleTimeSelect = (professional: Professional, time: string) => {
    setSelectedProfessional(professional);
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    navigate("/booking-confirmation", { 
      state: { 
        professional: selectedProfessional,
        date: selectedDate,
        time: selectedTime
      } 
    });
  };

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
                  variant={selectedProfessional?.id === professional.id && selectedTime === time ? "default" : "outline"}
                  className="text-sm"
                  onClick={() => handleTimeSelect(professional, time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedTime && selectedProfessional && (
        <div className="mt-8 text-center">
          <Button 
            onClick={handleSchedule}
            className="w-full md:w-auto"
          >
            Agendar agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
