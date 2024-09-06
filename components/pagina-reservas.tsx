'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, BookOpen } from "lucide-react"

export function PaginaReservas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
    {/* <h1 className="text-3xl font-bold mb-8 text-center text-black">Sistema de Reservas</h1> */}
      <div className="w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZBo10Q6legkGxgkv8TtW60QZzddWtuejEGCTyqKr2LZ9iGPzYDtxzA284bokiOBEOpyxY918r" className="w-full block">
          <Button 
            className="w-full h-48 md:h-56 flex flex-col items-center justify-center space-y-4 hover:bg-white hover:text-black hover:border-black hover:border-2 transition-colors duration-300 p-6" 
            variant="default"
          >
            <Users className="w-16 h-16" />
            <span className="text-xl text-center">Reservar Sala Ancianos</span>
          </Button>
        </Link>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZBo10Q6legkGxgkv8TtW60QZzddWtuejEGCTyqKr2LZ9iGPzYDtxzA284bokiOBEOpyxY918r" className="w-full block">
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
