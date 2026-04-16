import PieChart from '@/components/PieChart'
import React from 'react'



const StatsPage = () => {
  return (
    <div className=' max-w-277.5 mx-auto py-20'>
      <h2 className='text-text-primary text-[3rem] font-bold mb-6 leading-none'>
        Friendship Analytics
      </h2>

      <div className='bg-foreground rounded-lg shadow-sm border border-gray-200 h-132 p-8'>
        <h5 className='text-theme-primary text-xl font-medium mb-6'>
          By Interaction Type
        </h5>

        <PieChart />
      </div>
    </div>
  )
}

export default StatsPage