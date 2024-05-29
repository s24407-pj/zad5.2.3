"use client"

import { useState } from "react"
import Photo from "./Photo"

export default function PhotoList() {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      title: "aPhoto 1",
      url: "https://picsum.photos/349",
      date: "2021-01-01",
    },
    {
      id: 2,
      title: "Photo 2",
      url: "https://picsum.photos/350",
      date: "2021-01-02",
    },
    {
      id: 3,
      title: "Photo 3",
      url: "https://picsum.photos/351",
      date: "2021-01-03",
    },
    {
      id: 4,
      title: "Photo 4",
      url: "https://picsum.photos/352",
      date: "2021-01-04",
    },
    {
      id: 5,
      title: "bPhoto 5",
      url: "https://picsum.photos/353",
      date: "2021-01-05",
    },
    {
      id: 6,
      title: "Photo 6",
      url: "https://picsum.photos/354",
      date: "2021-01-06",
    },
    {
      id: 7,
      title: "Photo 7",
      url: "https://picsum.photos/355",
      date: "2021-01-07",
    },
    {
      id: 8,
      title: "Photo 8",
      url: "https://picsum.photos/356",
      date: "2021-01-08",
    },
    {
      id: 9,
      title: "Photo 9",
      url: "https://picsum.photos/357",
      date: "2021-01-09",
    },
  ])

  const deletePhoto = (id: number) => {
    const newPhotos = photos.filter((photo) => photo.id !== id)
    setPhotos(newPhotos)
  }

  const sortByDate = () => {
    const newPhotos = [...photos].sort((a, b) => {
      return a.date.localeCompare(b.date)
    })
    setPhotos(newPhotos)
  }

  const sortByTitle = () => {
    const newPhotos = [...photos].sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    setPhotos(newPhotos)
  }

  const randomize = () => {
    const newPhotos = [...photos].sort(() => Math.random() - 0.5)
    setPhotos(newPhotos)
  }

  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen w-full p-5 bg-gray-200 justify-center">
      <div>
        <p>Filters</p>
        <button className="p-5 active:scale-75" onClick={sortByDate}>
          Sort by Date
        </button>
        <button className="p-5 active:scale-75" onClick={sortByTitle}>
          Sort by Title
        </button>
        <button className="p-5 active:scale-75" onClick={randomize}>
          Randomize
        </button>
      </div>
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          title={photo.title}
          url={photo.url}
          date={photo.date}
          deletePhoto={() => deletePhoto(photo.id)}
        />
      ))}
    </div>
  )
}
