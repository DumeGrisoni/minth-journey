import React, {useState, useEffect} from 'react'
import FormFields from '../components/FormFields';
import Loading from '../components/Loading';

const RenderCards = ({data, title})=>{
  if(data?.lenght > 0)  {
    return data.map((image) => <Card key={image._id} {...image}  />
    )}

    return(
      <h2 className='mt-5 font-bold text-[#6468ff] text-xl uppercase'>
        {title}
      </h2>
    )
}



const Home = () => {
  const [loading, setloading] = useState(false);
  const [images, setImages] = useState(null);

  const [searchText, setsearchText] = useState('')

  return (
    <section className=' max-w-7xl mx-auto' > 
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          L'imagination de la communauté
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[800px] '>
          Voyagez dans l'imagination de la communauté et découvrez des images générées automatiquement.
        </p>
      </div>
      <div className='mt-16'>
        <FormFields />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loading />
          </div>
        ): (
          <>
          {searchText && (
            <h2 className='font-medium text-[#666e75] text-xl mb-3'>
              Voir les résultats pour <span className='text-[#222328]'>{searchText}</span> 
            </h2>
          )}
          <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
            {searchText? (
              <RenderCards 
                data={[]}
                title='Aucun résulats trouvé'/>
            )
            : (
               <RenderCards
                data={[]}
                title='Aucune images trouvée' />
              )}
          </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home