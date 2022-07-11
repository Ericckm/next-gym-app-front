import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api';
import FormModal from '../components/templates/FormModal';
import { getExerciseData } from '../services/getExerciseData';
import { getExerciseLog } from '../services/getExecLog';



export const ExerciseContext = createContext();


export function ExerciseContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState()
  const [videoUrl, setVideoUrl] = useState()
  const [type, setType] = useState()
  const [id, setId] = useState(false)
  const [liked, setLiked] = useState(false)
  const [training, setTraining] = useState('A')

  const [exercises, setExercises] = useState({ loading: false, data: [], error: false })

  useEffect(() => {
    async function getExec() {
      const response = await getExerciseData()
      if (response.status === 200) {
        setExercises({ loading: true, data: response.data, error: false })
      } else {
        setExercises({ loading: true, data: [], error: true })
      }
    }
    getExec()
  }, [])

  const [execLog, setExecLog] = useState({ loading: false, data: [], error: false })

  useEffect(() => {
    async function getExecLog() {
      // const id = exercises.forEach((exercise) => exercise = exercise._id)

      // console.log(id)
    
      const response = await getExerciseLog(id)
      if (response.status === 200) {
        setExecLog({ loading: true, data: response.data, error: false })
      } else {
        setExecLog({ loading: true, data: [], error: true })
      }
    }
    getExecLog()
   
  }, [])

  

  function handleSelect(e) {
    setTraining(e.target.value)
  }

  function handleFormModal() {
    setName('')
    setVideoUrl('')
    setType(null)
    setLiked(false)
    setId('')
    setOpenFormModal(true);
  }

  function handleCloseFormModal() {
    setOpenFormModal(false)
  }

  function nameHandler(e) {
    setName(e.target.value)
  }

  function videoUrlHandler(e) {
    setVideoUrl(e.target.value)
  }

  function typeHandler(e) {
    setType(e.target.value)
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const exercise = {
      name,
      videoUrl,
      type,
      liked,
      id
    }

    { id ? api.patch(`exercise/${id}`, exercise) : api.post('exercise', exercise) }


    setOpenFormModal(false)
  }

  function handleLiked(id) {
    api.put(`exercise/${id}`)
  }

  function handleDelete(id) {
    api.delete(`exercise/${id}`)
  }

  function handleEdit(name, videoUrl, type, exeId, liked) {
    setName(name)
    setVideoUrl(videoUrl)
    setType(type)
    setId(exeId)
    setLiked(liked)

    setOpenFormModal(true)
  }

  return (
    <ExerciseContext.Provider
      value={{
        handleFormModal,
        handleCloseFormModal,
        name, nameHandler,
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

      }}>
      {children}
      {openFormModal && <FormModal />}
    </ExerciseContext.Provider>
  )
}