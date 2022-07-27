import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import FormModal from "../components/templates/FormModal";
import { getExerciseData } from "../services/getExerciseData";
import { getExerciseLog } from "../services/getExecLog";
import LogModal from "../components/templates/LogModal";

export const ExerciseContext = createContext();

export function ExerciseContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState(false);
  const [liked, setLiked] = useState(false);

  const [exercises, setExercises] = useState({
    loading: false,
    data: [],
    error: false,
  });

  // GET ALL EXERCISES

  useEffect(() => {
    async function getExec() {
      const response = await getExerciseData();
      if (response.status === 200) {
        setExercises({ loading: true, data: response.data, error: false });
      } else {
        setExercises({ loading: true, data: [], error: true });
      }
    }
    getExec();
  }, []);

  const [execLog, setExecLog] = useState({
    loading: false,
    data: [],
    error: false,
  });

  function handleFormModal() {
    setName("");
    setVideoUrl("");
    setType(null);
    setLiked(false);
    setId("");
    setOpenFormModal(true);
  }

  function handleCloseFormModal() {
    setOpenFormModal(false);
  }

  function nameHandler(e) {
    setName(e.target.value);
  }

  function videoUrlHandler(e) {
    setVideoUrl(e.target.value);
  }

  function typeHandler(e) {
    setType(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const exercise = {
      name,
      videoUrl,
      type,
      liked,
      id,
    };

    {
      id
        ? api.patch(`exercise/${id}`, exercise)
        : api.post("exercise", exercise);
    }

    setOpenFormModal(false);
  }

  function handleLiked(id) {
    api.put(`exercise/${id}`);
  }

  function handleDelete(id) {
    api.delete(`exercise/${id}`);
  }

  function handleEdit(name, videoUrl, type, exeId, liked) {
    setName(name);
    setVideoUrl(videoUrl);
    setType(type);
    setId(exeId);
    setLiked(liked);

    setOpenFormModal(true);
  }

  // TRAINING PAGE STATES

  const [training, setTraining] = useState("A");
  const [openLogModal, setOpenLogModal] = useState(false);

  function handleEditLog(name, videoUrl, type, exeId, liked) {
    setName(name);
    setVideoUrl(videoUrl);
    setType(type);
    setId(exeId);
    setLiked(liked);
    setOpenLogModal(true);
  }

  function handleSelect(e) {
    setTraining(e.target.value);
  }

  function handleCloseLogModal() {
    setOpenLogModal(false);
  }

  return (
    <ExerciseContext.Provider
      value={{
        handleFormModal,
        handleCloseFormModal,
        name,
        nameHandler,
        videoUrl,
        videoUrlHandler,
        type,
        typeHandler,
        handleSubmitForm,
        handleLiked,
        handleDelete,
        handleEdit,
        exercises,
        training,
        handleSelect,
        handleEditLog,
        handleCloseLogModal,
      }}
    >
      {children}
      {openLogModal && <LogModal />}
      {openFormModal && <FormModal />}
    </ExerciseContext.Provider>
  );
}
