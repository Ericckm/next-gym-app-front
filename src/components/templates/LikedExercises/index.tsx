import { useContext, useEffect, useState } from "react"
import { ExerciseContext } from "../../../context/ExerciseContext"
import { getExerciseLog } from "../../../services/getExecLog"

const LikedExercises = ({ name, videoUrl, liked, id, type }) => {

  const [execLog, setExecLog] = useState({ loading: false, data: [], error: false })

  useEffect(() => {
    async function getExecLog() {
      const response = await getExerciseLog()
      if (response.status === 200) {
        setExecLog({ loading: true, data: response.data, error: false })
      } else {
        setExecLog({ loading: true, data: [], error: true })
      }
    }
    getExecLog()
  }, [])

  const { handleLiked, handleDelete, handleEdit } = useContext(ExerciseContext)
  return (

    <div className="flex flex-col justify-center border border-blue-400 mb-3 rounded">

      <header className="flex gap-24  items-center justify-center border-b border-blue-400 bg-gray-100">
        <h2 className="font-bold">{name}</h2>
        <h2 className="font-bold">{type}</h2>
        <a href={videoUrl} target='_blank' className="text-blue-700">
          Video
        </a>
      </header>

      <div className="flex flex-col items-start p-2 text-sm">
        <span>Series:</span>
        <span>Repetições:</span>
        <span>Carga: Kg</span>
        <span>Obs:</span>
      </div>

      <div className="flex justify-around ">
        <button className="mb-2 border p-1 border-blue-400">Liked</button>
        <button className="mb-2 border p-1 border-blue-400">Edit</button>
      </div>

    </div>



    // <div className="flex justify-between max-h-5/6 p-2">
    //   <div className="flex flex-col p-2 gap-2 border border-blue-400 w-full rounded">
    //     <h2 className="font-bold">
    //       {name}
    //     </h2>
    //     <a href={videoUrl} target='_blank'>
    //       Video de execução
    //     </a>
    //     <div className="flex gap-2 ">
    //       <button className={`border p-1 border-blue-400 ${liked ? 'bg-blue-400 text-white border-black' : ''}`} onClick={() => handleLiked(id)}>
    //         {liked? 'Liked' : 'Like'}
    //       </button>
    //       <button className="border p-1 border-blue-400" onClick={() => handleEdit(name, videoUrl, type, id)}>
    //         Editar
    //       </button>
    //       <button className="border p-1 border-blue-400" onClick={() => handleDelete(id)}>
    //         Deletar
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default LikedExercises

