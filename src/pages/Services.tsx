import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Calendar } from "@/components/Calendar";
import { ProfessionalList } from "@/components/ProfessionalList";
import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        {/* Logo */}
        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <span className="text-3xl">💇</span>
        </div>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Escolha seu serviço</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Corte"
              price="R$ 50"
              icon="scissors"
              isSelected={selectedService === "corte"}
              onClick={() => setSelectedService("corte")}
            />
            <ServiceCard
              title="Barba"
              price="R$ 30"
              icon="spray-can"
              isSelected={selectedService === "barba"}
              onClick={() => setSelectedService("barba")}
            />
            <ServiceCard
              title="Corte + Barba"
              price="R$ 70"
              icon="scissors2"
              isSelected={selectedService === "combo"}
              onClick={() => setSelectedService("combo")}
            />
          </div>
        </section>

        {/* Calendar and Professionals Section */}
        {selectedService && (
          <section className="grid md:grid-cols-2 gap-8">
            <Calendar selected={selectedDate} onSelect={setSelectedDate} />
            {selectedDate && <ProfessionalList selectedDate={selectedDate} />}
          </section>
        )}

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
