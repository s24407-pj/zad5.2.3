"use client"
import Image from "next/image"
import ScoreSystem from "./ScoreSystem"
import { MdDelete } from "react-icons/md"

type Props = {
  url: string
  title: string
  date: string
  deletePhoto: () => void
}

export default function Photo({ url, title, date, deletePhoto }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-slate-400">
      <p>{title}</p>
      <p>{date}</p>
      <Image src={url} alt="image" width={350} height={350} />
      <ScoreSystem />
      <MdDelete onClick={deletePhoto} className=" size-6 hover:scale-125" />
    </div>
  )
}
