import ExerciseLog from "../../components/templates/ExerciseLog"
import Header from "../../components/templates/Header"


export const Training = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen p-1">
      <Header />
      <div className="flex flex-row px-44 justify-center items-center gap-2">
        <ExerciseLog/>
      </div>

    </div>
  )
}

