const ExerciseListHeader = ({type}) => {
  return (
    <h1 className='flex justify-center w-full text-lg font-bold mt-2 mb-2 border bg-gray-100 rounded border-blue-400 hover:bg-blue-200 hover:text-white transition-colors'>
      {type}
    </h1>
  )
}

export default ExerciseListHeader