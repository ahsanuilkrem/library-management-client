import AllBook from "@/components/modules/home/AllBook";
import Hero from "@/components/modules/home/Hero";
import Stats from "@/components/modules/home/Stats";


const Home = () => {
    return (
        <div className="space-y-10">
            <Hero></Hero>
            <Stats />
            <AllBook />
        </div>
    );
};

export default Home;