
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Calendar, User, Clock } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface BookingState {
  professional: {
    id: number;
    name: string;
    availableTimes: string[];
  };
  date: Date;
  time: string;
}

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { professional, date, time } = (location.state as BookingState) || {};

  // Redirect to services if no booking data is available
  if (!professional || !date || !time) {
    navigate("/services");
    return null;
  }

  const formattedDate = format(new Date(date), "d 'de' MMMM 'de' yyyy", { locale: ptBR });

  const handleBackToServices = () => {
    navigate("/services");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-8">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Agendamento Confirmado!
        </h1>

        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Data</p>
                <p className="font-medium">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Horário</p>
                <p className="font-medium">{time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Profissional</p>
                <p className="font-medium">{professional.name}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-6 pt-6">
            <p className="text-sm text-gray-500 mb-4">
              Enviamos um e-mail com os detalhes do seu agendamento.
            </p>
            <Button onClick={handleBackToServices} className="w-full">
              Voltar para serviços
            </Button>
          </div>
        </div>

        {/* Map Link */}
        <footer className="mt-12 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Ver localização no Google Maps
          </a>
        </footer>
      </div>
    </div>
  );
}
