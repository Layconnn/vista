"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slide as Menu } from "react-burger-menu";
// import { Twirl as Hamgurger } from "hamburger-react";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isInView, setIsInView] = useState(false);
  const [inView, setInView] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [ham, setHam] = useState<boolean>(false);
  const [burgerRight, setBurgerRight] = useState("2.5rem");
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      setBurgerRight(window.innerWidth <= 600 ? "1rem" : "2.5rem");
    };

    // Set initial value after component mounts (client side)
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsFixed(window.scrollY > 0);
      }, 0); // Runs after 100ms of inactivity
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setHam(window.innerWidth <= 959);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "28px",
      height: "25px",
      right: burgerRight,
      top: "1.5rem",
    },
    bmBurgerBars: {
      background: "#000000",
    },
    bmBurgerBarsHover: {
      background: "#000000",
    },
    bmCrossButton: {
      position: "absolute",
      right: "5px",
      top: "-18px",
      zIndex: "1",
      margin: "0px",
      padding: "0px",
      border: "none",
      fontSize: "0px",
      background: "transparent",
      cursor: "pointer",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#000000",
      padding: "1.5rem 1.5rem 0",
      fontSize: "1.5rem",
      marginTop: "-2.4rem",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const testimonials = [
    {
      id: 1,
      name: "Tyra Dhillon",
      role: "Software Tester",
      review:
        "This CRM has transformed how we interact with our customers. The marketing automation and customer...",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Product Manager",
      review:
        "Using this CRM has significantly improved our workflow. It's intuitive and easy to use...",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "UX Designer",
      review:
        "I appreciate how the CRM simplifies complex tasks. Our team has become more efficient...",
    },
  ];

  return (
    <>
      <div>
      <div
      className={`flex justify-between px-20 py-6 items-center transition-all duration-500 ease-in-out max-[1200px]:px-10 max-[600px]:px-4 ${
        isFixed
          ? `sticky top-0 left-0 w-full bg-white shadow-md z-50 max-w-[1440px] mx-auto ${
              visible ? 'translate-y-0' : '-translate-y-full'
            }`
          : ''
      }`}
    >
      <h4 className="font-inter text-[1.5rem] text-black leading-120 font-medium">
        LOGO
      </h4>

      {!ham ? (
        <div className="flex justify-center items-center gap-10">
          {['About', 'Features', 'Pricing', 'Blog'].map((item) => (
            <div key={item} className="group perspective-1000">
              <h5 className="text-hero text-[1.125rem] leading-140 font-inter font-medium cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:text-black hover:font-bold">
                {item}
              </h5>
            </div>
          ))}
        </div>
      ) : null}

      {!ham ? (
        <div className="flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center border border-dynamic-black rounded-lg text-white text-sm font-medium font-Inter leading-150 px-3 py-2 shadow-custom-shadow bg-neutral hover:text-black hover:bg-white transition-all duration-500 ease-in-out hover:cursor-pointer">
              Purchase Now
            </div>
            <div className="flex justify-center items-center rounded-lg border border-action-outline-base px-3 py-2 text-sm font-medium leading-150 font-inter text-content-dark hover:bg-black hover:text-white transition-all duration-500 ease-in-out hover:cursor-pointer">
              View Demo
            </div>
          </div>
        </div>
      ) : (
        <Menu styles={styles} right itemListElement="div" >
          <div className="flex flex-col justify-center items-center gap-20">
            {['About', 'Features', 'Pricing', 'Blog', 'Purchase', 'Demo'].map(
              (item) => (
                <div key={item} className="group perspective-1000">
                  <h5 className="text-white text-[1.125rem] leading-140 mb-8 font-inter font-medium cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">
                    {item}
                  </h5>
                </div>
              )
            )}
          </div>
        </Menu>
      )}
    </div>
        <div className="flex flex-col gap-10 p-20 pt-10 items-center w-full max-[1200px]:px-10 max-[600px]:px-4 max-[600px]:py-6 max-[600px]:gap-8">
          <div className="flex flex-col gap-3 items-center max-w-[64.75rem]">
            <h1 className="font-inter text-content-dark text-center font-medium text-[3rem] leading-120 max-w-[50rem] max-[1200px]:max-w-[37rem] max-[1200px]:text-[2rem] max-[600px]:text-[1.5rem]">
              Revolutionize Your Business with Our All-in-One CRM Dashboard
            </h1>
            <h4 className="font-inter text-about text-[1.25rem] text-center font-normal leading-160 max-[1200px]:text-[1rem] max-[1200px]:max-w-[50rem] max-[959px]:text-[1rem] max-[959px]:max-w-[35rem] max-[600px]:text-[0.8rem]">
              Experience a seamless and efficient way to manage your sales,
              projects, and customer relationships with our cutting-edge CRM
              Dashboard. Our platform empowers you to take control of your
              business operations and drive success like never before.
            </h4>
          </div>
          <div className="flex justify-center items-center gap-10 w-[100%] max-[959px]:gap-6 max-[600px]:gap-4">
            <div className="flex items-center justify-center p-4 rounded-[0.25rem] max-w-[12.8125rem] w-[100%] bg-black border border-black font-inter text-white leading-[1.5rem] font-semibold text-[1rem] hover:text-black hover:bg-white cursor-pointer max-[600px]:max-w-[8.8125rem] max-[600px]:p-2 max-[600px]:text-[0.7rem]">
              Get Started
            </div>
            <div
              className="flex p-4 justify-center items-center gap-2 max-w-[12.8125rem] w-[100%] border border-black rounded-[0.5rem] hover:bg-black hover:text-gray-50 cursor-pointer font-inter text-black leading-[1.5rem] font-semibold text-[1rem] max-[600px]:max-w-[8.8125rem] max-[600px]:p-2 max-[600px]:text-[0.7rem]"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Learn More
              <Image
                src={`${hover ? "/link2.svg" : "link.svg"}`}
                alt="Learn more"
                width={20}
                height={20}
                className="max-[600px]:w-[0.625rem] max-[600px]:h-[0.625rem]"
              />
            </div>
          </div>
          <Image
            src="/example.svg"
            alt="Learn more"
            height={520}
            width={1280}
            priority
            className="rounded-[0.75rem]"
          />
        </div>
        <div className="overflow-hidden whitespace-nowrap bg-black py-8 max-[959px]:py-4 max-[600px]:py-2">
          <Marquee pauseOnHover>
            <div className="flex items-center gap-12 justify-center pl-12 cursor-pointer max-lg:gap-6 max-lg:pl-6">
              <Image
                width={134.35296}
                height={9}
                alt="Learn more"
                src="/coin.svg"
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
              />
              <Image
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
                width={131.496}
                height={32.964}
                alt="Learn more"
                src="/square.svg"
              />
              <Image
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
                width={97.89808}
                height={32.964}
                alt="Learn more"
                src="/zoom.svg"
              />
              <Image
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
                width={179.2}
                height={32}
                alt="Learn more"
                src="/drop.svg"
              />
              <Image
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
                width={113}
                height={48}
                alt="Learn more"
                src="/google.svg"
              />
              <Image
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
                width={121}
                height={48}
                alt="Learn more"
                src="/slack.svg"
              />
              <Image
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
                width={131.496}
                height={32.964}
                src="/square.svg"
                alt="Learn more"
              />
              <Image
                className="max-lg:w-[3.125rem] max-lg:h-[3.125rem]"
                src="/zoom.svg"
                width={97.89808}
                height={32.964}
                alt="Learn more"
              />
            </div>
          </Marquee>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            clipPath: "inset(10% 0% 0% 0%)", // Initial state: Hidden by 10% from the top
          }}
          animate={
            isInView
              ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } // Fully visible
              : { opacity: 0, clipPath: "inset(10% 0% 0% 0%)" } // Hidden by 10% from the top
          }
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.5 }}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)} // Trigger exit animation
        >
          <div className="flex items-center justify-center px-20 pt-20 pb-10 max-[1300px]:justify-normal max-[1200px]:px-10 max-[600px]:px-4 max-[600px]:pt-10 max-[600px]:pb-0">
            <Image
              src="/rone.svg"
              alt="code"
              width={720}
              height={480}
              priority
              style={{ height: "auto", width: "auto" }}
              className="max-[1300px]:max-w-[500px] max-[959px]:max-w-[350px] max-[648px]:max-w-[300px] max-[500px]:max-w-[200px]"
            />
            <div className="text-[#474343] text-[2.5rem] font-medium font-inter leading-120 max-w-[36.2rem] ml-[-1.9rem] max-[1300px]:text-[2rem] max-[1200px]:max-w-[100%] max-[959px]:text-[1.5rem] max-[648px]:text-[1rem] max-[400px]:text-[0.7rem]">
              Organize projects, assign tasks, and monitor progress in
              real-time.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            clipPath: "inset(10% 0% 0% 0%)", // Initial state
          }}
          animate={
            inView
              ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } // Animation when in view
              : { opacity: 0, clipPath: "inset(10% 0% 0% 0%)" } // Animation when out of view
          }
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.5 }}
          onViewportEnter={() => setInView(true)}
          onViewportLeave={() => setInView(false)} // Trigger exit animation
        >
          <div className="flex items-center justify-center px-20 py-10 animate-appear max-[1300px]:justify-normal max-[1200px]:px-10 max-[600px]:px-4 max-[600px]:pb-0">
            <div className="text-[#474343] text-[2.5rem] font-medium font-inter leading-120 max-w-[36.2rem] mr-[-1.22rem] z-10 max-[1300px]:text-[2rem] max-[1200px]:max-w-[100%] max-[959px]:text-[1.5rem] max-[648px]:text-[1rem] max-[400px]:text-[0.7rem]">
              Track leads, manage opportunities, and close deals faster.
            </div>
            <Image
              src="/rtwo.svg"
              alt="code"
              width={720}
              height={480}
              style={{ height: "auto", width: "auto" }}
              priority
              className="max-[1300px]:max-w-[500px] max-[959px]:max-w-[350px] max-[648px]:max-w-[300px] max-[500px]:max-w-[200px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            clipPath: "inset(10% 0% 0% 0%)", // Initial state
          }}
          animate={
            isVisible
              ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } // Animation when visible
              : { opacity: 0, clipPath: "inset(10% 0% 0% 0%)" } // Animation when not visible
          }
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.5 }}
          onViewportEnter={() => setIsVisible(true)}
          onViewportLeave={() => setIsVisible(false)} // Trigger exit animation
        >
          <div className="flex items-center justify-center px-20 pt-10 pb-10 animate-appear max-[1300px]:justify-normal max-[1200px]:px-10 max-[600px]:px-4 max-[600px]:pb-0">
            <Image
              src="/rthree.svg"
              alt="code"
              width={720}
              height={480}
              style={{ height: "auto", width: "auto" }}
              priority
              className="max-[1300px]:max-w-[500px] max-[959px]:max-w-[350px] max-[648px]:max-w-[300px] max-[500px]:max-w-[200px]"
            />
            <div className="text-[#474343] text-[2.5rem] font-medium font-inter leading-120 max-w-[36.2rem] ml-[-3rem] max-[1300px]:text-[2rem] max-[1200px]:max-w-[100%] max-[959px]:text-[1.5rem] max-[648px]:text-[1rem] max-[500px]:ml-[-1.8rem] max-[400px]:text-[0.7rem]">
              Manage your team, track performance, and streamline workflows
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-12 p-20 max-[1200px]:px-10 max-[959px]:gap-6 max-[959px]:py-10 max-[600px]:px-4">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="font-inter text-[3rem] leading-[3.6rem] font-medium text-[#000000] max-[959px]:text-[2rem] max-[959px]:leading-[2.6rem] max-[500px]:leading-[1rem] max-[500px]:text-[1.5rem] max-[330px]:text-[1rem]">
              Used by 10K+ businesses
            </h3>
            <h6 className="font-inter text-[1.125rem] leading-[1.575rem] text-[#727272] max-[500px]:max-w-[25rem] max-[500px]:leading-[1rem] max-[500px]:text-center max-[500px]:text-[0.7rem]">
              Hear what our users say about OneCRM and why you should choose
              OneCRM
            </h6>
          </div>
          <div className="flex justify-center relative overflow-hidden h-[20rem] max-lg:h-[12rem]">
            <div className="pointer-events-none absolute top-0 left-0 w-[150px] max-lg:w-[70px] h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 w-[150px] max-lg:w-[70px] h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            <Marquee pauseOnHover speed={50}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="group perspective-1000">
                  <div className="flex flex-col px-8 py-8 border border-opacity-56 rounded-lg max-w-[25rem] w-full mx-[1rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 max-lg:p-4 max-lg:max-w-[15rem]">
                    <div className="flex flex-col gap-12 max-lg:gap-6">
                      <div className="flex flex-col gap-4 max-lg:gap-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Image
                              key={i}
                              src="/rating.svg"
                              alt="rating"
                              width={40}
                              height={40}
                              className="max-[959px]:w-[1.5rem] max-[959px]:h-[1.5rem]"
                            />
                          ))}
                          <Image
                            src="/starhalf.svg"
                            alt="rating"
                            width={24}
                            height={24}
                            className="max-[959px]:w-[1rem]"
                          />
                        </div>
                        <h6 className="font-inter text-[1.125rem] leading-[1.575rem] text-[#000000] font-medium max-lg:text-[0.7rem] max-lg:leading-[1.2rem] max-lg:max-w-[20rem] max-lg:font-normal">
                          {testimonial.review}
                        </h6>
                      </div>
                      <div className="flex gap-6 max-lg:gap-2">
                        <div className="rounded-[50%] w-[3rem] h-[3rem] bg-[#727272] max-lg:w-[1.5rem] max-lg:h-[1.5rem]"></div>
                        <div className="flex flex-col gap-1">
                          <h5 className="font-inter font-medium text-[1.125rem] leading-[1.575rem] text-[#000000] max-lg:leading-[0.7rem] max-lg:text-[0.7rem]">
                            {testimonial.name}
                          </h5>
                          <h5 className="font-inter font-normal text-[1.125rem] leading-[1.575rem] text-[#727272] max-lg:leading-[0.7rem] max-lg:text-[0.7rem]">
                            {testimonial.role}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="flex justify-center p-20 max-[1200px]:px-10 max-[1200px]:pt-0 max-[600px]:px-4">
          <div className="flex items-center justify-center bg-[#000000] pt-[3.4375rem] pl-[3.5rem] rounded-lg gap-[1.25rem] max-w-[80rem] w-[100%] max-[1300px]:flex-col max-[1200px]:gap-6 max-[1200px]:items-start max-[959px]:pl-10 max-[959px]:pt-10 max-[648px]:pt-4 max-[648px]:pl-6 max-[500px]:pl-4">
            <div className="flex flex-col gap-10 justify-start max-[1200px]:gap-6">
              <div className="flex flex-col gap-4 max-[1200px]:gap-0">
                <h2 className="text-left text-[3rem] font-inter font-medium leading-[3.6rem] text-white max-[959px]:text-[2rem] max-[648px]:text-[1.5rem] max-[648px]:font-bold max-[648px]:leading-[2rem] max-[600px]:text-[1rem] max-[400px]:leading-[2rem]">
                  Take Your Business to the Next Level
                </h2>
                <h6 className="font-inter text-[1.125rem] font-normal leading-[1.6875rem] text-left text-white max-[1200px]:max-w-[40.5rem] max-[959px]:text-[1rem] max-[648px]:text-[0.8rem] max-[648px]:leading-[1rem] max-[648px]:max-w-[27.51rem] max-[500px]:text-[0.5rem] max-[500px]:max-w-[18.51rem] max-[600px]:text-[#727272]">
                  Join the growing number of businesses that trust our CRM
                  Dashboard to drive their success. Sign up today and start
                  experiencing the benefits of a streamlined and efficient
                  business management system.
                </h6>
              </div>
              <div className="flex items-center gap-3 mb-12 max-[1300px]:mb-0">
                <div className="flex justify-center items-center py-4 max-w-[12.8125rem] bg-white rounded text-black hover:bg-black hover:text-white font-inter text-[1rem] font-semibold leading-6 cursor-pointer w-full hover:border hover:border-white max-[648px]:py-2 max-[648px]:max-w-[8.8125rem] max-[600px]:text-[0.7rem] max-[600px]:max-w-[6.8125rem]">
                  Get Started
                </div>
                <div className="flex justify-center items-center py-4 max-w-[12.8125rem] bg-black rounded text-white hover:bg-white hover:text-black font-inter text-[1rem] font-semibold leading-6 cursor-pointer border border-white w-full max-[648px]:py-2 max-[648px]:max-w-[8.8125rem] max-[600px]:text-[0.7rem] max-[600px]:max-w-[6.8125rem]">
                  Contact Us
                </div>
              </div>
            </div>
            <Image
              src="/think.svg"
              alt="thinking"
              // width={555}
              // height={403}
              width={500}
              height={0} // This ensures height auto-adjusts based on width
              className="rounded-tl-lg rounded-br-lg max-[1300px]:max-w-[100%] max-[1300px]:w-[100%] max-[1300px]:rounded-tl-none max-[1300px]:rounded-br-none"
            />
          </div>
        </div>
        <div className="bg-black text-white p-20 max-[1200px]:p-10 max-[600px]:px-4">
          <div className="flex max-[500px]:flex-col max-[500px]:gap-8">
            <div className="flex flex-col gap-6 max-w-[27rem] w-full">
              <h5 className="font-inter font-semibold text-[2rem] leading-[2.4rem] text-white">
                LOGO
              </h5>
              <div className="flex gap-4 justify-start">
                <div className="group perspective-1000">
                  <Image
                    width={40}
                    height={40}
                    className="cursor-pointer transition-transform duration-300 group-hover:scale-125"
                    src="/ig.svg"
                    alt="Instagram"
                  />
                </div>
                <div className="group perspective-1000">
                  <Image
                    width={40}
                    height={40}
                    className="cursor-pointer transition-transform duration-300 group-hover:scale-125"
                    src="/fb.svg"
                    alt="Facebook"
                  />
                </div>
                <div className="group perspective-1000">
                  <Image
                    width={40}
                    height={40}
                    className="cursor-pointer transition-transform duration-300 group-hover:scale-125"
                    src="/in.svg"
                    alt="LinkedIn"
                  />
                </div>
                <div className="group perspective-1000">
                  <Image
                    width={40}
                    height={40}
                    className="cursor-pointer transition-transform duration-300 group-hover:scale-125"
                    src="/x.svg"
                    alt="Twitter"
                  />
                </div>
              </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[3.5rem]">
              <div className="grid grid-cols-1 gap-4">
                <div className="group perspective-1000">
                  <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">
                    Pages
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    About Us
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Features
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Product
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Pricing
                  </h5>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="group perspective-1000">
                  <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">
                    Company
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Careers
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Guide
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Startup Program
                  </h5>
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="group perspective-1000">
                  <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">
                    Support
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Help Center
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Customer Support
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    API Docs
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    System Status
                  </h5>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="group perspective-1000">
                  <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">
                    Resources
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    FAQ
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Blog
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Privacy Policy
                  </h5>
                </div>
                <div className="group perspective-1000">
                  <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">
                    Terms of Service
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-inter leading-[1.225rem] text-[0.875rem] text-[#F3F3F3D6]">
            Copyright © 2022. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
