import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";


const Layout = ({ children }) => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className="bg-background container border-b-2 border-b-gray-300 pt-4">
      <Particles
      className="-z-40"
        init={particlesInit} 
        loaded={particlesLoaded}
        options={{
          
          fpsLimit: 144,
          
          particles: {
              color: {
                  value: "#8B9AD9",
              },
              links: {
                  color: "#2448E3",
                  distance: 170,
                  enable: true,
                  opacity: 0.6,
                  width: 1,
              },
              collisions: {
                  enable: true,
              },
              move: {
                  directions: "none",
                  enable: false,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 0,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 500,
                  },
                  value: 40,
              },
              opacity: {
                  value: 0.8,
              },
              shape: {
                  type: "circle",
                  
              },
              size: {
                  value: { min: 1, max: 3 },
              },
          }
      }}
        
      />
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
