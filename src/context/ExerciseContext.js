import { createContext, useState } from 'react'
import { api } from '../services/api';

import FormModal from '../components/templates/FormModal';


export const ExerciseContext = createContext();

export function ExerciseContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState()
  const [videoUrl, setVideoUrl] = useState()
  const [type, setType] = useState()
  const [id, setId] = useState(false)
  const [liked, setLiked] = useState(false)


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
    console.log(type)
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

  function handleEdit(name, videoUrl, type, exeId) {
    setName(name)
    setVideoUrl(videoUrl)
    setType(type)
    setId(exeId)

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