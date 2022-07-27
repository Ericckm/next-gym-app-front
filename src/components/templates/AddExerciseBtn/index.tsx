import { Plus } from "phosphor-react";
import { useContext } from "react";
import { ExerciseContext } from "../../../context/ExerciseContext";

const AddExerciseBtn = () => {
  const { handleFormModal } = useContext(ExerciseContext);

  return (
    <div className="flex justify-center mt-8 ">
      <button onClick={handleFormModal}>
        <Plus
          size={34}
          className=" border border-blue-400 rounded p-1 bg-gray-100"
        />
      </button>
    </div>
  );
};

export default AddExerciseBtn;
