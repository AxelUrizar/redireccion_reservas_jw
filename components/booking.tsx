'use client'

import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface BookingProps {
  url: string
}

export default function Booking ({ url }: BookingProps) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-background z-0">
      <button className="fixed bottom-8 right-2 md:left-[93%] z-10 bg-sky-700 p-5 rounded-full m-5" onClick={handleBack}>
        <Undo2 size={24} />
      </button>
      <iframe 
        className="h-screen" 
        src={url}
        width="100%" 
      />
    </div>
  )
}
