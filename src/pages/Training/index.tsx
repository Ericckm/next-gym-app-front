import ExerciseLog from "../../components/templates/ExerciseLog"
import Header from "../../components/templates/Header"


export const Training = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen p-1">
      <Header />
      <div className="flex flex-row bg-white justify-around px-44">
        <ExerciseLog/>
      </div>

    </div>
  )
}

