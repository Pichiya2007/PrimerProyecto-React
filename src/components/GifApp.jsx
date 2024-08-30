import { useState } from "react"
import { useGif } from "../hooks/useGif"
import { BuscarGifs } from "./BuscarGifs"
import { ContenedorGif } from "./ContenedorGif"

//funtional component
export const GifApp = () => {

  const{handleGetGif, arregloGifs} = useGif()

  // PROPS
  return (
    <>
      <BuscarGifs handleGetGif={handleGetGif}/>
      <ContenedorGif arregloGifs={arregloGifs}/>
    </>
  )
}
