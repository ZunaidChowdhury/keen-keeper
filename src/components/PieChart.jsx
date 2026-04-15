'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const PieChartComponent = () => {

    const chartData = [
        { name: 'Text', value: 400, fill: '#7f37f5' },
        { name: 'Call', value: 300, fill: '#254e40' },
        { name: 'Video', value: 300, fill: '#37a162' },
    ];

    return (
        <div className=' pb-6' style={{ width: '100%', height: '100%' }}>
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
        </div>
    )
}

export default PieChartComponent