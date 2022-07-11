import Header from "../../components/templates/Header"
import ExerciseList from "../../components/templates/ExerciseList"
import AddExerciseBtn from "../../components/templates/AddExerciseBtn"

export const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen p-1">
      <Header />
      <div className="flex flex-row bg-white justify-around px-44">
        <ExerciseList type='Peito' />
        <ExerciseList type='Costas' />
        <ExerciseList type='Perna' />
        <ExerciseList type='Ombro' />
        <ExerciseList type='Biceps' />
        <ExerciseList type='Triceps' />
      </div>
      <AddExerciseBtn />
    </div>
  )
}
