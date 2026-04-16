'use client'

import { GlobalContext } from '@/contexts/GlobalContext';
import React, { useContext } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import NoDataCard from './cards/NoDataCard';

const PieChartComponent = () => {

    const { userActivity } = useContext(GlobalContext);

    const chartData = [
        { name: 'Text', value: 0, fill: '#7f37f5' },
        { name: 'Call', value: 0, fill: '#254e40' },
        { name: 'Video', value: 0, fill: '#37a162' },
    ];


    userActivity.map(item => {
        if (item.type === 'Text') {
            chartData[0].value += 1;
        }
        else if (item.type === 'Call') {
            chartData[1].value += 1;
        }
        else if (item.type === 'Video') {
            chartData[2].value += 1;
        }
    });


    return (

        <div className='h-full'>
            {
                userActivity.length > 0 ? <div className=' pb-12' style={{ width: '100%', height: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius={10}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none" // Removes the thin white border between slices
                        >
                            {chartData.map((entry, index) => (
                                // Use entry.fill directly from your data object
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Tooltip />
                        {/* Replicates the bottom legend in your image */}
                        <Legend
                            verticalAlign="bottom"
                            iconType="circle"
                            iconSize={10}
                            wrapperStyle={{ paddingTop: '20px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div> : <NoDataCard 
                        title="No data to show."
                        description="Do some interactions with friends to see interaction chart here." />
            }

        </div>
    )
}

export default PieChartComponent


// <div className=' h-full flex flex-col items-center justify-center'>
//                 <h4 className='text-text-primary text-xl font-semibold'>
//                     No data to show.
//                 </h4>
//                 <p>
//                     Do some interactions with friends to see interaction chart here.
//                 </p>
//             </div>