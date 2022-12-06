import Image from "next/image";
import facebook from "../../facebook.svg";
import twitter from "../../twitter.svg";
import instagram from "../../instagram.svg";
import linkedin from "../../linkedin.svg";
import phone from "../../phone.svg";
import mail from "../../mail.svg";
import robot from "../../robot.svg";
import logo from "../../big_logo.svg";
import cseLogo from "../../cse_logo.svg";
import heart from "../../heart.svg";

const Footer = () => {
  const socials = [
    {
      url: "#",
      image: <Image className="w-8" src={facebook} alt="" />,
    },
    {
      url: "#",
      image: <Image className="w-8" src={twitter} alt="" />,
    },
    {
      url: "#",
      image: <Image className="w-8" src={instagram} alt="" />,
    },
    {
      url: "#",
      image: <Image className="w-8" src={linkedin} alt="" />,
    },
  ];
  return (
    <footer id="contact" className="text-center lg:text-left text-white mb-0 ">
      <div className="hidden lg:block absolute -z-10 select-none left-1/2 -translate-x-1/2">
        <Image src={robot} width={250} height={300} />
      </div>
      <div className="py-2 md:px-24 lg:py-12 lg:pl-8 z-10 text-center lg:text-left ">
        <div className="grid   md:grid-cols-10  ">
          <div className=" lg:col-span-4 lg:ml-20 ">
            <div className="flex justify-center lg:justify-start  ">
              <Image src={logo} width={250} height={32} alt="great Logo" />
            </div>
            
            <div className="flex mt-[10%] lg:ml-4 justify-center lg:justify-start items-center ">
              {socials.map((social, idx) => {
                return (
                  <a
                    key={idx}
                    href={social.url}
                    className="mr-8 text-social-icons"
                  >
                     {social.image} 
                  </a>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:col-span-2  lg:block">
            <h6 className="uppercase font-semibold mb-4  text-2xl flex justify-center md:justify-start">
              Our Event
            </h6>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                Home
              </a>
            </p>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                About
              </a>
            </p>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                Agenda
              </a>
            </p>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                FAQ
              </a>
            </p>
            <p className="text-lg ">
              <a href="#!" className="text-footer-element">
                Contact
              </a>
            </p>
          </div>
          <div className="hidden lg:col-span-2  lg:block">
            <h6 className="uppercase font-semibold mb-4 text-2xl  flex justify-center md:justify-start">
            Quick links
            </h6>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                Home
              </a>
            </p>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                About
              </a>
            </p>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                Agenda
              </a>
            </p>
            <p className="text-lg mb-4">
              <a href="#!" className="text-footer-element">
                FAQ
              </a>
            </p>
            <p className="text-lg ">
              <a href="#!" className="text-footer-element">
                Contact
              </a>
            </p>
          </div>
          <div className="hidden lg:col-span-2 lg:flex flex-col justify-start ">
            <h6 className="uppercase font-semibold mb-4 text-2xl flex justify-center md:justify-start">
              Contact Us
            </h6>

           <div className="flex flex-col justify-center ">
             <p className="text-lg mb-4">
               <a href="#!" className=" text-footer-element">
               <Image style={{display:"inline",marginRight:"5px"}} src={phone}  width={15} height={15} />+21336381617
               </a>
             </p>
             <p className="text-lg mb-4">
               <a href="#!" className=" text-footer-element">
                 <Image style={{display:"inline",marginRight:"5px"}} src={mail}  width={15} height={15} />ka_belhadef@esi.dz
               </a>
             </p>
           </div>

          </div>

          
        </div>
      </div>
      <hr className="solid h-3 border-gray-300"></hr>
      <div className="text-center text-xl font-bold py-2 ">
      
        <span>Made with <Image style={{display:"inline",margin:"2px"}} src={heart}  width={15} height={15} />
        by <Image style={{display:"inline",marginLeft:"2px"}} src={cseLogo}  width={20} height={30} /> </span>
      </div>
    </footer>
  );
};

export default Footer;
