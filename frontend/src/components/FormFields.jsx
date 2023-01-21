import React from 'react'

const FormFields = ({labelName, type, name, placeholder, value, handleChange, isAutomatic, handleAutomaticPrompt}) => {
  return (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <label htmlFor={name} className="block text-sm font-medium  text-[#7289da]">{labelName}</label>
            
            {/** Bouton de génération d'image aléatoire selon les textes dans constants */}
            {isAutomatic && (
                <button 
                    type="button"
                    onClick={handleAutomaticPrompt}
                    className='font-semibold text-xs bg-[#817ACF] hover:bg-[#7289da] transition ease-in delay-75 py-1 px-2 rounded-[5px] text-black mb-3'
                >
                    Générer automatiquement
                </button>
            )}
        </div>
        <input 
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className='bg-[#CACDD2] border border-[#6469ff] text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3'
        />
    </div>
  )
}

export default FormFields