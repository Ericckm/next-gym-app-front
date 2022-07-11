import { useContext } from 'react'
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExerciseListHeader from '../../atoms/ExerciseListHeader'
import TrainingSelectHeader from '../../atoms/TrainingSelectHeader'
import LikedExercises from '../LikedExercises'

type ExerciseMapTypes = {
  _id: string
  name: string
  videoUrl: string
  liked: boolean
  type: string
}

const ExerciseLog = () => {

  const { exercises, training } = useContext(ExerciseContext)
  let typeA
  let typeB

      function trainingType() {      
        if (training === 'A') {
          typeA = 'Costas'
          typeB = 'Biceps'
        }
        if (training === 'B') {
          typeA = 'Peito'
          typeB = 'Triceps'
        } if (training === 'C') {
          typeA = 'Ombro'
          typeB = 'Perna'
        }
      }
      trainingType()

  return (
    <div className='min-w-[32%]'>
      <TrainingSelectHeader />
      <div className=' flex flex-col'>
        {!exercises.loading && ('Carregando')}
        {exercises.error && exercises.loading && ('Erro na busca da API')}
        {exercises.loading && exercises.data
        .filter((i: ExerciseMapTypes) => i.liked)
        .filter((i: ExerciseMapTypes) => i.type === typeA || i.type === typeB)
        .map((exercise: ExerciseMapTypes) => {
          return <LikedExercises
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

export default ExerciseLog

