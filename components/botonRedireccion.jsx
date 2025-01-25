import { Button } from '@/components/ui/button'
export function BotonRedireccion ({ text, handleClick, Icon }) {
  return (
    <Button 
      className="w-full h-44 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-600 hover:bg-sky-700  transition-colors duration-300 p-6 shadow-lg shadow-gray-900" 
      variant="default"
      onClick={handleClick}
    >
      <Icon className="w-14 h-14" />
      <span className="text-xl text-center whitespace-pre-wrap ">{text}</span>
    </Button>
  )
}
