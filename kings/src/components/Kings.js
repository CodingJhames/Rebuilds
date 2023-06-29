
import imagenes  from '../assets/imagenes'


export const Kings = () => {

  return (
    <>
        <h1>Da Kings</h1>
        <div className='container' >
            <section className='Reyes' >
              <div className='Rey1'>
                <img src={ imagenes.img1 } alt="rey1" srcSet=""></img>
                <p>rey_ataulfo</p>
              </div>
              <div className='Rey2'>
                <img src={ imagenes.img2 } alt="rey2" srcSet=""></img>
                <p>rey_ervigio</p>
              </div>
              <div className='Rey3'>
                <img src={ imagenes.img3 } alt="rey3" srcSet=""></img>
                <p>rey_incognito</p>
              </div>
              <div className='Rey4'>
                <img src={ imagenes.img4 } alt="rey4" srcSet=""></img>
                <p>rey_recesvinto</p>
              </div>
              <div className='Rey5'>
                <img src={ imagenes.img5 } alt="rey5" srcSet=""></img>
                <p>rey_leogivildo</p>
              </div>
              <div className='Rey6'>
                <img src={ imagenes.img6 } alt="rey6" srcSet=""></img>
                <p>rey_sisebuto</p>
              </div>
              <div className='Rey7'>
                <img src={ imagenes.img7 } alt="rey7" srcSet=""></img>
                <p>rey_atanagildo</p>
              </div>
              <div className='Rey8'>
                <img src={ imagenes.img8 } alt="rey8" srcSet=""></img>
                <p>rey_teodorico</p>
              </div>
            </section>
        </div>
        
    </>
  )
}

