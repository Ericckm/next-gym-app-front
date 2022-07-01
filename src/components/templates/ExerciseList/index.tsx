import { useEffect, useState } from 'react'
import { getExerciseData } from '../../../services/getExercise'
import Exercise from '../Exercise'

type ExerciseMapTypes = {
  _id: string
  name: string
  videoUrl: string
  liked: boolean
  type: string
}

type ExerciseApiTypes = {
  loading: boolean
  data: []
  error: boolean
}

const ExerciseList = ({ filter }) => {

  const [exercises, setExercises] = useState<ExerciseApiTypes>({ loading: false, data: [], error: false })

  useEffect(() => {
    async function getExec() {
      const response = await getExerciseData()
      if (response.status === 200) {
        setExercises({ loading: true, data: response.data, error: false })
      } else {
        setExercises({ loading: true, data: [], error: true })
      }
    }
    getExec()
  }, [])

  return (
    <div>
      <h1 className='flex justify-center text-lg font-bold mt-2 mb-2 border rounded border-blue-400 hover:bg-blue-200 hover:text-white transition-colors'>
        {filter}
      </h1>
      <div>
        {!exercises.loading && ('Carregando')}
        {exercises.error && exercises.loading && ('Erro na busca da API')}
        {exercises.loading && exercises.data.filter((i: ExerciseMapTypes) => i.type === filter).map((exercise: ExerciseMapTypes) => {
          return <Exercise
            key={exercise._id}
            id={exercise._id}
            name={exercise.name}
            videoUrl={exercise.videoUrl}
            liked={exercise.liked}
            type={exercise.type}
          />
        })}
      </div>
    </div>
  )
}

export default ExerciseList

