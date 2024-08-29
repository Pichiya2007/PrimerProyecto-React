import { useGif } from "../hooks/useGif"

//funtional component
export const GifApp = () => {

  const{handleGetGif, arregloGifs} = useGif()

  return (
    <>
    
    <div>
      <button onClick={ handleGetGif }>Gif Aleatorio</button>
      {arregloGifs.map(({id, url}) => {
        return(
          <img key={id} src={url}/>
        )
      })}
    </div>
    </>
  )
}
