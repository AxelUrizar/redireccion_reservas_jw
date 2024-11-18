'use client'

import { Button } from "@/components/ui/button"
import { BookOpen, PanelBottomOpen, PanelTopOpen } from "lucide-react"
import { useRouter } from "next/navigation"

export function PaginaReservas() {
  const router = useRouter()

  const handleAuditorioSuperior = () => {
    router.push("/auditorio-superior")
  }

  const handleBiblioteca = () => {
    router.push("/biblioteca")
  }

  const handleAuditorioInferior = () => {
    router.push("/auditorio-inferior")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md grid grid-cols-1 gap-6">
        <Button 
          className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-700 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
          variant="default"
          onClick={handleAuditorioSuperior}
        >
          <PanelBottomOpen className="w-16 h-16" />
          <span className="text-xl text-center">Reservar Segunda Sala (Aud. Superior)</span>
        </Button>
        <Button 
          className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-700 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
          variant="default"
          onClick={handleBiblioteca}
        >
          <BookOpen className="w-16 h-16" />
          <span className="text-xl text-center">Reservar Biblioteca</span>
        </Button>
        <Button 
          className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-700 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
          variant="default"
          onClick={handleAuditorioInferior}
        >
          <PanelTopOpen className="w-16 h-16" />
          <span className="text-xl text-center">Reservar Segunda Sala (Aud. Inferior)</span>
        </Button>
      </div>
    </div>
  )
}
