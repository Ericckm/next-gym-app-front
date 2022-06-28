import { HeaderTitle } from "../atoms/HeaderTitle"

export const Header = () => {
  return (
    <div className="flex justify-evenly h-1/6 bg-blue-300 p-4 border border-blue-400 rounded">
      <HeaderTitle description='Inicio' />
      <HeaderTitle description='Treino' />
      <HeaderTitle description='Contato' />
    </div>
  )
}

