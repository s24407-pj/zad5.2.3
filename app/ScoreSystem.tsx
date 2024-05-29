"use client"

import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import Star from "./Star"

const createArray = (length: number) => [...Array(length)]

export default function ScoreSystem() {
  const [isLiked, setIsLiked] = useState(false)
  const [selectedStars, setSelectedStars] = useState(0)
  const [scoreCount, setScoreCount] = useState<number[]>([])
  const average = scoreCount.reduce((a, b) => a + b, 0) / scoreCount.length

  const totalStars = 5
  return (
    <div className="flex flex-row items-start gap-8">
      <div>
        <div className="flex flex-row">
          {createArray(totalStars).map((n, i) => (
            <Star
              key={i}
              selected={selectedStars > i}
              onSelect={() => {
                setSelectedStars(i + 1)
                setScoreCount([...scoreCount, i + 1])
              }}
            />
          ))}
        </div>

        {average > 0 && <div>Srednia: {average.toPrecision(2)}</div>}
      </div>
      <div>
        <FaHeart
          onClick={() => setIsLiked(!isLiked)}
          className={`${isLiked ? "text-red-600" : ""} size-7 hover:scale-125`}
        />
      </div>
    </div>
  )
}
