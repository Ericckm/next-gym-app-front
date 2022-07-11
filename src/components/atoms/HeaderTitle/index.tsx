import Link from "../../molecules/Link"

export const HeaderTitle = ({ description, href }) => {
  return (
    <Link href={href} className="cursor-pointer text-xl font-bold border p-4  rounded border-blue-400 hover:bg-blue-200 hover:text-white transition-colors">
      {description}
    </Link>
  )
}
