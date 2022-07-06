import { CheckSquare, XSquare } from "phosphor-react"
import { useContext } from "react"
import { ExerciseContext } from "../../../context/ExerciseContext"

const FormModal = () => {

  const { handleCloseFormModal, name, nameHandler, videoUrl, videoUrlHandler, type, typeHandler, handleSubmitForm } = useContext(ExerciseContext)
  return (
    <div className="bg-form-rgba fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center">
      <div className="bg-white w-full h-full max-w-[400px] max-h-[400px] py-[32px] px-[48px] rounded flex flex-col justify-between">
        <header className="flex justify-between items-center w-full h-[40px] bg-transparent p-0 text-xl ">
          <strong>Adicione um exercicio</strong>
          <button type="button" className="max-h-[25px]" onClick={handleCloseFormModal}>
            <XSquare size={28} />
          </button>
        </header>
        <div className="h-full w-full flex flex-col justify-between gap-4">
          <form className="flex flex-col gap-4 m-0 items-center" onSubmit={handleSubmitForm}>
            <div className="flex flex-col gap-1 mt-2">
              <label>
                Nome
              </label>
              <input type="text" className="border border-blue-400" value={name} onChange={nameHandler} />
            </div>
            <div className="flex flex-col gap-1">
              <label>
                Video
              </label>
              <input type="text" className="border border-blue-400" value={videoUrl} onChange={videoUrlHandler} />
            </div>
            <div className="flex flex-col gap-1 w-[250px]">
              <label>
                Tipo
              </label>
              <select className="border border-blue-400 bg-transparent" value={type} onChange={typeHandler}>
                <option disabled selected>Selecione</option>
                <option value='Costas'>Costas</option>
                <option value='Peito'>Peito</option>
                <option value='Perna'>Perna</option>
                <option value='Biceps'>Biceps</option>
                <option value='Triceps'>Triceps</option>
                <option value='Ombro'>Ombro</option>
              </select>
            </div>
            <footer className="mt-7">
              <button type="submit">
                <CheckSquare size={28} />
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormModal