import { Children, useState } from "react"
import Card from "../component/MyCard"
import BarChart from '../component/Chart/BarChart'
import LineChart from '../component/Chart/LineChart'
import ScatterChart from '../component/Chart/ScatterChart'
import PieChart from '../component/Chart/PieChart'
import Ratingdata from '../component/Data/Rating.json'
import { Scatter } from '@ant-design/charts'
import data from '../component/Data/PriceVSRating.json'

const Home = () => {

    const [IconCardContent, setICC] = useState([
        {
            title: '熱門免費項目',
            src: 'https://play-lh.googleusercontent.com/TsWlnZRPoVnn4eytaxVW6MwSNYHPf3zfV--WyfBfiITa7fUlF11JziT2dimGLT2z-4p4=w240-h480-rw',
            detail: 'KNY台灣天氣.地震速報',
        },
        {
            title: '營收最高項目',
            src: 'https://play-lh.googleusercontent.com/B5AENJqFOd91t5cWZLTQbVUm7iDWzYVM1n0Pe2RI_46dhlWMtVAUBioUvy4YMXWdwA=s48-rw',
            detail: 'Google One',
        },
        {
            title: '熱門付費項目',
            src: 'https://play-lh.googleusercontent.com/gDsYbNyljY_Ug5_t4z611ZZ_lOcbXNdpZ4oGGEtu828z6c0VKGgH98bEIJGDmbqWosw=w240-h480',
            detail: '樂客導航王 全3D Pro',
        },
    ])

    const config = {
        data,
        xField: 'Price',
        yField: 'Rating',
        colorField: 'Genre',
        color: [
            '#d62728',
            '#2ca02c',
            '#000000',
            '#9467bd',
            '#ffd500',
            '#1f77b4',
            '#00518a',
            '#ffbc69',
            '#9bd646',
        ],
        pointStyle: {
            fillOpacity: 1,
        },
        xAxis: {
            visible: true,
            min: -5,
        },
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '2vw'
            }} >
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    gap: '5vmin'
                }}
            >
                {
                    IconCardContent.map(e => {
                        return (
                            <Card>
                                <IconCard
                                    title={e.title}
                                    src={e.src}
                                    detail={e.detail}
                                />
                            </Card>
                        )
                    })
                }
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2vw',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                <Card>
                    <ChartCard title='評價分布' >
                        <BarChart />
                    </ChartCard>
                </Card>
                <Card>
                    <ChartCard title='種類分布' >
                        <PieChart />
                    </ChartCard>
                </Card>
                <Card>
                    <ChartCard title='容量 VS 評價' >
                        <ScatterChart />
                    </ChartCard>
                </Card>
                <Card>
                    <ChartCard title='售價 VS 評價' >
                        <Scatter {...config} />
                    </ChartCard>
                </Card>
            </div>
        </div>
    )
}

const IconCard = ({ title, src, detail }) => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '20vmin',
                gap: '0.4em'
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '1.6em',
                    fontWeight: 'bold'
                }}
            >
                {title}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img
                    style={{
                        width: '20vmin'
                    }}
                    alt="logo"
                    src={src}
                />
            </div>
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '1.6em',
                    fontWeight: 'bold'
                }}
            >
                {detail}
            </div>
        </div>
    )
}
const ChartCard = ({ children, title }) => {
    return (
        <div style={{ width: '36vw' }} >
            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.6em' }} >
                {title}
            </div>
            {children}
        </div>
    )
}

export default Home