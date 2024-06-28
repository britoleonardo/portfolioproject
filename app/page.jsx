import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-7 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1">
              Olá! Eu sou <br />{" "}
              <span className="text-accent">Leonardo Brito</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Cursando Análise e Desenvolvimento de sistemas.
              <br />
              Designer Gráfico. Branding Designer. Apaixonado por tecnologia e
              jogos.
            </p>
            {/* btn and social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span className="text-xl">Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containersStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-7 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
