export const HeaderTitle = ({description}) => {
  return (
    <h2 className="cursor-pointer text-xl font-bold border p-4 rounded border-blue-400 hover:bg-blue-200 hover:text-white transition-colors">
      {description}
    </h2>
  )
}
