import Header from "../../components/templates/Header"
import ExerciseList from "../../components/templates/ExerciseList"
import AddExerciseBtn from "../../components/templates/AddExerciseBtn"

export const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen p-1">
      <Header />
      <div className="flex flex-row bg-white justify-around px-44">
        <ExerciseList filter="Peito" />
        <ExerciseList filter="Costas" />
        <ExerciseList filter="Biceps" />
        <ExerciseList filter="Triceps" />
        <ExerciseList filter="Ombro" />
        <ExerciseList filter="Perna" />
      </div>
      <AddExerciseBtn />
    </div>
  )
}
