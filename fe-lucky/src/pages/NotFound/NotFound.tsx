import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='mt-[50px]'>
      <Helmet>
        <title> Trang Không Tồn Tại </title>
        <meta name='description' />
      </Helmet>
      <h2>
          Trang không tồn tại
      </h2>
     </div>
     )}
export default NotFound
