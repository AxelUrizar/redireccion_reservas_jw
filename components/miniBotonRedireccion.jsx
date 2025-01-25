import { Button } from '@/components/ui/button'
export function MiniBotonRedireccion ({ text, handleClick, Icon }) {
  return (
    <Button 
      className="w-full h-44 md:h-56 flex flex-col items-center justify-center space-y-4 bg-sky-900 hover:bg-sky-950 transition-colors duration-300 p-6 shadow-lg shadow-gray-900" 
      variant="default"
      onClick={handleClick}
    >
      <Icon className="w-12 h-12" />
      <span className="text-l text-center whitespace-pre-wrap ">{text}</span>
    </Button>
  )
}
