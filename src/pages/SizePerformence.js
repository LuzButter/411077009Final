import { Scatter } from '@ant-design/charts'
import data from '../component/Data/SizeVSRating.json'

const ChartCard = ({ children, title }) => {
    return (
        <div style={{ height: '85vh' }}>
            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.6em' }} >
                {title}
            </div>
            {children}
        </div>
    )
}

const App = () => {

    const config = {
        data,
        xField: 'Size',
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

        <ChartCard title='容量 VS 評價' >
            <Scatter {...config} />
        </ChartCard>
    )
}

export default App