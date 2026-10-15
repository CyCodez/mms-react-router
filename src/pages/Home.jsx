import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

function Home() {
    const name = "John Doe";
  return (
    <div>
      <Navbar />
      <Hero player="home page" />
      <h1>Home Page</h1>
        <p>Welcome to the home page, {name}!</p>
    </div>
  )
}

export default Home