'use client'

import { Button } from "@/components/ui/button"
import { Users, BookOpen, Lectern } from "lucide-react"
import { useRouter } from "next/navigation"

export function PaginaReservas() {
  const router = useRouter()

  const handleAuditorioSuperior = () => {
    router.push("/auditorio-principal")
  }

  const handleBiblioteca = () => {
    router.push("/sala-ancianos")
  }

  const handleAuditorioInferior = () => {
    router.push("/segunda-sala")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md grid grid-cols-1 gap-6">
        <Button 
          className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
          variant="default"
          onClick={handleAuditorioSuperior}
        >
          <Lectern className="w-16 h-16" />
          <span className="text-xl text-center">Reservar Auditorio Principal</span>
        </Button>
        <Button 
          className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
          variant="default"
          onClick={handleBiblioteca}
        >
          <Users className="w-16 h-16" />
          <span className="text-xl text-center">Reservar Sala Ancianos</span>
        </Button>
        <Button 
          className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
          variant="default"
          onClick={handleAuditorioInferior}
        >
          <BookOpen className="w-16 h-16" />
          <span className="text-xl text-center">Reservar Segunda Sala</span>
        </Button>
      </div>
    </div>
  )
}
