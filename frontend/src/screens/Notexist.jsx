import { Link } from 'react-router-dom'

const Notexist = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 m-3 pt-10 pb-10">
      <div>
        <h1 className="text-xl mb-3">Sorry, page does not exist.</h1>
        <p>
          Please return to <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  )
}

export default Notexist
