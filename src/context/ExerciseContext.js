import { createContext, useState } from 'react'
import FormModal from '../components/templates/FormModal';
import { api } from '../services/api';


export const ExerciseContext = createContext();

export function ExerciseContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState()
  const [videoUrl, setVideoUrl] = useState()
  const [type, setType] = useState()


  function handleFormModal() {
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
      type
    }

    api.post('exercise', exercise)

    setOpenFormModal(false)
  }

  function handleLiked(id) {
    api.put(`exercise/${id}`)
  }

  function handleDelete(id) {
    api.delete(`exercise/${id}`)
  }
  
  function handleEdit(name, videoUrl, type) {
    setName(name)
    setVideoUrl(videoUrl)
    setType(type)

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
        handleEdit
      }}>
      {children}
      {openFormModal && <FormModal />}
    </ExerciseContext.Provider>
  )
}