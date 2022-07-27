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

  const { handleLiked, handleEditLog } = useContext(ExerciseContext)
  return (

    <div className="flex flex-col justify-center border border-blue-400 mb-3 rounded">

      <header className="flex gap-24 items-center justify-center bg-gray-100 rounded h-6">
        <h2 className="font-bold">{name}</h2>
        <h2 className="font-bold">{type}</h2>
        <a href={videoUrl} target='_blank' className="text-blue-700">
          Video
        </a>
      </header>

      <div className="flex flex-col items-start p-2 text-sm border-t border-blue-400">
        <span>Carga: Kg</span>
        <span>Series:</span>
        <span>Repetições: </span>
        <span>Obs:</span>
      </div>

      <div className="flex justify-around ">
        <button onClick={() => handleEditLog(name, id, type, liked, videoUrl)} className="mb-2 border p-1 border-blue-400">Editar</button>
        <button onClick={() => handleLiked(id)} className={`mb-2 border p-1 border-blue-400 ${liked? 'bg-blue-400 text-white border-black' : ''}`}>Remover</button>
      </div>

    </div>
  )
}

export default LikedExercises

