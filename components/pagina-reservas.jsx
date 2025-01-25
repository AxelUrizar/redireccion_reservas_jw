'use client'

import { BookOpen, PanelBottomOpen, PanelTopOpen, DoorOpen } from "lucide-react"
import { BotonRedireccion } from "@/components/botonRedireccion"
import { MiniBotonRedireccion } from "@/components/miniBotonRedireccion"
import { MaxiBotonRedireccion } from "@/components/maxiBotonRedireccion"
import { useRouter } from "next/navigation"

export function PaginaReservas() {
  const router = useRouter()

  const handleAuditorioSuperior = () => {
    router.push("/auditorio-superior")
  }

  const handleAuditorioInferior = () => {
    router.push("/auditorio-inferior")
  }

  const handleBiblioteca = () => {
    router.push("/biblioteca")
  }

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-gray-800 p-4 px-6">
      <h1 className="text-3xl text-center text-white font-bold mb-4">Reservas JW</h1>
      <ul className="w-full max-w-md grid grid-cols-1 gap-3">
        <li className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <BotonRedireccion text="Aud. Superior" handleClick={handleAuditorioSuperior} Icon={PanelBottomOpen} />
          </div>
          <MiniBotonRedireccion text="Segunda Sala" handleClick={handleAuditorioSuperior} Icon={DoorOpen} />
        </li>
        <li>
          <MaxiBotonRedireccion text="Biblioteca" handleClick={handleBiblioteca} Icon={BookOpen} />
        </li>
        <li className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <BotonRedireccion text="Aud. Inferior" handleClick={handleAuditorioInferior} Icon={PanelTopOpen} />
          </div>
            <MiniBotonRedireccion text="Segunda Sala" handleClick={handleAuditorioInferior} Icon={DoorOpen} />
        </li>
      </ul>
    </div>
  )
}
