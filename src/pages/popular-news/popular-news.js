import { useSelector } from 'react-redux'
import News from '../../components/news/news'

const App = () => {
    const { popularNews } = useSelector( store => store?.news || {} )
    const { popularNewsError } = useSelector( store => store?.errors || {} )
    const { isLoadingData } = useSelector( store => store?.loader || {} )

    return (
        <div>
            { isLoadingData
                ? <h2>Loading.........</h2>
                : <News news={ popularNews } error={ popularNewsError } title="Popular News"/> }
        </div>
    )
}

export default App;
