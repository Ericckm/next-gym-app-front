import { CheckSquare, XSquare } from "phosphor-react";
import { useContext } from "react";
import { ExerciseContext } from "../../../context/ExerciseContext";

const LogModal = () => {
  const { handleCloseLogModal, name } = useContext(ExerciseContext);
  return (
    <div className="bg-form-rgba fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center">
      <div className="bg-white w-full h-full max-w-[400px] max-h-[400px] py-[32px] px-[48px] rounded flex flex-col justify-between">
        <header className="flex justify-between w-full h-[40px] bg-transparent p-0 text-xl">
          <strong> {name} </strong>
          <button
            type="button"
            className="max-h-[25px]"
            onClick={handleCloseLogModal}
          >
            <XSquare size={28} />
          </button>
        </header>
        <div className="h-full w-full flex flex-col justify-between gap-4">
          <form className="flex flex-col gap-2 mt-2 items-center">
            <div className="flex flex-col">
              <label>Carga</label>
              <input type="text" className="border border-blue-400" />
            </div>
            <div className="flex flex-col">
              <label>Series</label>
              <input type="text" className="border border-blue-400" />
            </div>
            <div className="flex flex-col">
              <label>Repetições</label>
              <input type="text" className="border border-blue-400" />
            </div>
            <div className="flex flex-col">
              <label>Obs</label>
              <input type="text" className="border border-blue-400" />
            </div>
            <footer className="mt-5">
              <button type="submit">
                <CheckSquare size={28} />
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogModal;
