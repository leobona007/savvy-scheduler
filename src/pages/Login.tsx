
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/services");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">💇</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Bem-vindo(a)
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Faça login para agendar seu horário
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input type="email" placeholder="Seu email" className="w-full" />
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleLoginSuccess}
              >
                <Mail className="w-4 h-4 mr-2" />
                Entrar com Email
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Apple className="w-5 h-5 mr-2" />
                Apple
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 max-w-[300px] text-right text-sm text-muted-foreground">
        <p>
          Transforme sua aparência com nossos serviços profissionais de beleza.
          Agende agora e descubra o melhor de você!
        </p>
      </div>
    </div>
  );
}
