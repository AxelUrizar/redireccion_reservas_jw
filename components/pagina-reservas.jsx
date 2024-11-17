'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, PanelBottomOpen, PanelTopOpen } from "lucide-react"

export function PaginaReservas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md grid grid-cols-1 gap-6">
        <Link href="https://calendar.app.google/Cq4ZYBsR2GUV5r3q7" className="w-full block">
          <Button 
            className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-700 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
            variant="default"
          >
            <PanelBottomOpen className="w-16 h-16" />
            <span className="text-xl text-center">Reservar Segunda Sala (Aud. Superior)</span>
          </Button>
        </Link>
        <Link href="https://calendar.app.google/Cq4ZYBsR2GUV5r3q7" className="w-full block">
          <Button 
            className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-700 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
            variant="default"
          >
            <BookOpen className="w-16 h-16" />
            <span className="text-xl text-center">Reservar Biblioteca</span>
          </Button>
        </Link>
        <Link href="https://calendar.app.google/Cq4ZYBsR2GUV5r3q7" className="w-full block">
          <Button 
            className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-700 hover:bg-white hover:text-sky-700 hover:border-sky-700 hover:border-2 transition-colors duration-300 p-6" 
            variant="default"
          >
            <PanelTopOpen className="w-16 h-16" />
            <span className="text-xl text-center">Reservar Segunda Sala (Aud. Inferior)</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
