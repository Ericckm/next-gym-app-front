import { useContext } from "react"
import { ExerciseContext } from "../../../context/ExerciseContext"

const Exercise = ({ name, videoUrl, liked, id, type }) => {

  const { handleLiked, handleDelete, handleEdit } = useContext(ExerciseContext)
  return (
    <div className="flex justify-between max-h-5/6 p-2 ">
      <div className="flex flex-col p-2 gap-2 border border-blue-400">
        <h2 className="font-bold">
          {name}
        </h2>
        <a href={videoUrl} target='_blank'>
          Video de execução
        </a>
        <div className="flex gap-2 ">
          <button className={`border p-1 border-blue-400 ${liked ? 'bg-blue-400 text-white border-black' : ''}`} onClick={() => handleLiked(id)}>
            {liked? 'Liked' : 'Like'}
          </button>
          <button className="border p-1 border-blue-400" onClick={() => handleEdit(name, videoUrl, type, id)}>
            Editar
          </button>
          <button className="border p-1 border-blue-400" onClick={() => handleDelete(id)}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Exercise

