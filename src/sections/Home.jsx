import HeroText from "../components/HeroText"

const Home = () => {
  return (
    <section className=" flex c-space w-full min-h-screen pt-20 ">
      <HeroText />
      <img src="../../public/Home-cover.png" className="w-[35vw] h-[35vw] rounded-full shadow-[0_0_25px_var(--primary)] transition-all duration-400 ease-in-out hover:shadow-[0_0_25px_var(--primary),0_0_50px_var(--primary),0_0_100px_var(--primary)]" alt="home-img" />      

    </section>
  )
}

export default Home