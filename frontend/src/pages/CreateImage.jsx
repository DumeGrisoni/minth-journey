import React, {useState} from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { FormFields, Loading } from '../components';
import {preview} from '../assets/index.js'
// import { getAutomaticPrompt } from '../utils/index.js';


const CreateImage = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false);

  const generateImg = () => {

  }

  const handleSubmit = () => {

  } 
  const handleChange = (e) => {

  }

  const handleAutomaticPrompt = () => {

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#7289da] text-[32px]'>
          Imagine !
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[800px] '>
          Créez votre propre magnifique et imaginative image en utilisant notre générateur d'images & partagez la avec la comunnauté.
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormFields
            labelName='Votre nom'
            type='text'
            name='name'
            placeholder='Jean Do'
            value={form.name}
            handleChange={handleChange}
            />
            <FormFields
            labelName='Imagine ...'
            type='text'
            name='prompt'
            placeholder='a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art'
            value={form.prompt}
            handleChange={handleChange}
            isAutomatic
            handleAutomaticPrompt={handleAutomaticPrompt}
            />
            <div className='relative bg-[#424549] border border-[#7289da] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
              {form.photo ? (
                <img src={form.photo} alt={form.prompt} className="w-full h-full object-contain" />
              ): (
                <img src={preview} alt="aperçu de l'image" className='w-9/12 h-9/12 object-contain opacity-40' />
              )}

              {generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center bg-[#1e212430] rounded-lg'>
                  <Loading />
                </div>
              )}
            </div>
        </div>
        <div className='mt-5 flex gap-5'>
          <button type='button' onClick={generateImg} className=' text-white hover:bg-[#817ACF] delay-75 transition ease-in bg-[#7289da] font-medium text-sm rounded-md w-full sm:w-auto px-5 py-2.5 text-center'>
            {generatingImg ? 'Génération...' : 'Générer'}
          </button>
        </div>
        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            Une fois que vous avez généré votre image, vous pouvez la partager à la communauté en cliquant sur le bouton !
          </p>
          <button type='submit' className='mt-3 text-white bg-[#7289da] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-[#817ACF] delay-75 transition ease-in '>
            {loading ? 'Partage...' : 'Partager avec la Communauté'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateImage