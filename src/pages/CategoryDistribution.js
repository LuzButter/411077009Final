import PieChart from '../component/Chart/PieChart'

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

    return (

            <ChartCard title='所有項目分類分布' >
                <PieChart />
            </ChartCard>
    )
}

export default App