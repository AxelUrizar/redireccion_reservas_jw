'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, BookOpen, Lectern } from "lucide-react"

export function PaginaReservas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md grid grid-cols-1 gap-6">
        <Link href="https://calendar.app.google/xN3SVCPmpRXt4G737" className="w-full block">
          <Button 
            className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 hover:bg-white hover:text-black hover:border-black hover:border-2 transition-colors duration-300 p-6" 
            variant="default"
          >
            <Lectern className="w-16 h-16" />
            <span className="text-xl text-center">Reservar Auditorio Principal</span>
          </Button>
        </Link>
        <Link href="https://calendar.app.google/uETy1gvvnku23xic9" className="w-full block">
          <Button 
            className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 hover:bg-white hover:text-black hover:border-black hover:border-2 transition-colors duration-300 p-6" 
            variant="default"
          >
            <Users className="w-16 h-16" />
            <span className="text-xl text-center">Reservar Sala Ancianos</span>
          </Button>
        </Link>
        <Link href="https://calendar.app.google/H1GmZ8CSwuQ21xM96" className="w-full block">
          <Button 
            className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 hover:bg-white hover:text-black hover:border-black hover:border-2 transition-colors duration-300 p-6" 
            variant="default"
          >
            <BookOpen className="w-16 h-16" />
            <span className="text-xl text-center">Reservar Segunda Sala</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
