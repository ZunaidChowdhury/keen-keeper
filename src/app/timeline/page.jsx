
import TimelineContent from '@/components/TimelineContent';
import React from 'react'


const TimelinePage = () => {
  


  return (
    <div className=' px-4  max-w-285.5 mx-auto py-10 tablet:py-20'>
      <h2 className='text-text-primary text-4xl tablet:text-5xl font-bold mb-6 leading-none'>
        Timeline
      </h2>

      <TimelineContent />

    </div>
  )
}

export default TimelinePage