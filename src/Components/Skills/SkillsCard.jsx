import React from 'react'

const SkillsCard = ({ name, progress }) => {
  return (
    <div >
      <p className='text-white font-semibold'>{name}</p>

      <div className='w-full relative mt-2'>

        <p style={{ left: progress, transform: "translateX(-50%)"}} className='text-white absolute -top-8'>{progress}</p>

        <div className='bg-gray-700 rounded-full h-4 w-full overflow-hidden mb-4'>

          <div style={{ width: progress }} className='bg-[#FFF5E9] h-full rounded-full'></div>

        </div>

      </div>
    </div>
  )
}

export default SkillsCard
