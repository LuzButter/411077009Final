import BarChart from '../component/Chart/BarChart'
import data from '../component/Data/Rating.json'
import { Column } from '@ant-design/charts';

const ChartCard = ({ children, title, sub }) => {
    return (
        <div style={{ height: '85vh' }}>
            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.6em' }} >
                {title}
            </div>
            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.2em' }} >
                {sub}
            </div>
            {children}
        </div>
    )
}

const App = () => {

    const config = {
        forceFit: true,
        data,
        padding: 'auto',
        xField: 'action',
        yField: 'pv',
        // conversionTag: { visible: true },
    };

    return (

        <ChartCard title='評價分布' sub='平均評分 : 4.173243045387998' >
            <Column {...config} />
        </ChartCard>
    )
}

export default App