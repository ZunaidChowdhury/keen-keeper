import PieChart from '@/components/PieChart'
import React from 'react'



const StatsPage = () => {
  return (
    <div className=' px-4  max-w-285.5 mx-auto py-10 tablet:py-20'>
      <h2 className='text-text-primary text-4xl tablet:text-5xl font-bold mb-6 leading-none text-center tablet:text-left'>
        Friendship Analytics
      </h2>

      <div className='bg-foreground rounded-lg shadow-sm border border-gray-200 h-120 md:h-132 px-4 pt-8 pb-4 md:px-8 md:py-8'>
        <h5 className='text-theme-primary text-xl font-medium mb-6'>
          By Interaction Type
        </h5>

        <PieChart />
      </div>
    </div>
  )
}

export default StatsPage