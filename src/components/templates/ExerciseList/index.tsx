import { useContext, useEffect, useState } from 'react'
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExerciseListHeader from '../../atoms/ExerciseListHeader'
import Exercise from '../Exercise'

type ExerciseMapTypes = {
  _id: string
  name: string
  videoUrl: string
  liked: boolean
  type: string
}

const ExerciseList = ({type}) => {

  const { exercises } = useContext(ExerciseContext)

  return (
    <div>
      <ExerciseListHeader type={type}/>
      <div>
        {!exercises.loading && ('Carregando')}
        {exercises.error && exercises.loading && ('Erro na busca da API')}
        {exercises.loading && exercises.data.filter((i: ExerciseMapTypes) => i.type === type).map((exercise: ExerciseMapTypes) => {
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

