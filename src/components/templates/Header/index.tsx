import { HeaderTitle } from "../../atoms/HeaderTitle"

const Header = () => {
  return (
    <div className="flex justify-evenly h-1/6 bg-white p-4 border border-blue-400 rounded mx-44">
      <HeaderTitle description='Inicio' href='/'/>
      <HeaderTitle description='Treino' href='/training'/>
      <HeaderTitle description='Log' href='/'/>
    </div>
  )
}

export default Header
