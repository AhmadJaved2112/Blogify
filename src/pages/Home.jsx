import Banner from '../components/Banner'
import Blogs from './Blogs'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='container mx-auto'>
        <Blogs />
      </div>
    </div>
  )
}

export default Home