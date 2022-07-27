import { useContext } from "react";
import { ExerciseContext } from "../../../context/ExerciseContext";

const TrainingSelectHeader = () => {
  const { handleSelect } = useContext(ExerciseContext);

  return (
    <select
      onChange={handleSelect}
      className="flex w-full text-lg font-bold text-center mt-2 mb-2 border bg-gray-100 
      rounded border-blue-400 hover:bg-blue-200 hover:text-white transition-colors"
    >
      <option value="A">Treino A</option>
      <option value="B">Treino B</option>
      <option value="C">Treino C</option>
    </select>
  );
};

export default TrainingSelectHeader;
