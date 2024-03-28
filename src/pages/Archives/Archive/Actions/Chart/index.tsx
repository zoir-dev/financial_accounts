import dynamic from 'next/dynamic'
import React from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const LineChart = ({ data }: { data: any }) => {
    const categories = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen'];
    return (
        <ReactApexChart
            options={{
                chart: {
                    type: 'area',
                    stacked: false,
                    zoom: {
                        enabled: false
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                    },
                },
                colors: ['#7F56D9'],
                xaxis: {
                    categories: categories,
                },
                yaxis: {
                    stepSize: 20,
                    min: 0,
                    max: 100
                }
            }}
            series={[{ name: 'Info', data: data }]}
            type="area"
            height={284}
            width='100%'

        />
    )
}

export default LineChart
