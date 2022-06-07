import { useSelector } from 'react-redux'
import News from '../../components/news/news'

const LatestNews = () => {
    const { latestNews } = useSelector( store => store?.news || {} )
    const { latestNewsError } = useSelector( store => store?.errors || {} )
    const { isLoadingData } = useSelector( store => store?.loader || {} )

    return (
        <div>
            { isLoadingData
                ? <h2>Loading.........</h2>
                : <News news={ latestNews } error={ latestNewsError } title="Latest News"/> }
        </div>
    )
}

export default LatestNews;
