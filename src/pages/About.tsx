import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <Link to='/'>Home</Link>
      <div>About</div>
    </div>
  )
}

export default About;