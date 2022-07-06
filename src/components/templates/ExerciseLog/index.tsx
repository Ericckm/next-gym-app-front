import { useEffect, useState } from "react"
import { getExerciseLog } from "../../../services/getExecLog"

// type ExerciseMapTypes = {
//   _id: string
//   name: string
//   videoUrl: string
//   liked: boolean
//   type: string
// }

type ExerciseApiTypes = {
  loading: boolean
  data: []
  error: boolean
}

const ExerciseLog = () => {
  const [exeLog, setExeLog] = useState<ExerciseApiTypes>({ loading: false, data: [], error: false })

  useEffect(() => {
    async function getExec() {
      const response = await getExerciseLog()
      if (response.status === 200) {
        setExeLog({ loading: true, data: response.data, error: false })
      } else {
        setExeLog({ loading: true, data: [], error: true })
      }
    }
    getExec()
    
  }, [])
  console.log(exeLog)
  return (
    <div>
      
    </div>
  )
}

export default ExerciseLog