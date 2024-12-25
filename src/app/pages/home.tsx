"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isInView, setIsInView] = useState(false);
  const [inView, setInView] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          className={`flex justify-between px-20 py-6 items-center transition-all duration-500 ease-in-out ${
            isFixed ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-500 ease-in-out" : ""
          }`}
        >
          <h4 className="font-inter text-[1.5rem] text-black leading-120 font-medium">
            LOGO
          </h4>
          <div className="flex justify-center items-center gap-10">
            {["About", "Features", "Pricing", "Blog"].map((item) => (
              <div key={item} className="group perspective-1000">
                <h5 className="text-hero text-[1.125rem] leading-140 font-inter font-medium cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:text-black hover:font-bold">
                  {item}
                </h5>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center border border-dynamic-black rounded-lg text-white text-sm font-medium font-Inter leading-150 px-3 py-2 shadow-custom-shadow bg-neutral hover:text-black hover:bg-white transition-all duration-500 ease-in-out hover:cursor-pointer">
              Purchase Now
            </div>
            <div className="flex justify-center items-center rounded-lg border border-action-outline-base px-3 py-2 text-sm font-medium leading-150 font-inter text-content-dark hover:bg-black hover:text-white transition-all duration-500 ease-in-out hover:cursor-pointer">
              View Demo
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 p-20 pt-10 items-center w-full">
          <div className="flex flex-col gap-3 items-center max-w-[64.75rem]">
            <h1 className="font-inter text-content-dark text-center font-medium text-[3rem] leading-120 max-w-[50rem]">
              Revolutionize Your Business with Our All-in-One CRM Dashboard
            </h1>
            <h4 className="font-inter text-about text-[1.25rem] text-center font-normal leading-160">
              Experience a seamless and efficient way to manage your sales,
              projects, and customer relationships with our cutting-edge CRM
              Dashboard. Our platform empowers you to take control of your
              business operations and drive success like never before.
            </h4>
          </div>
          <div className="flex justify-center items-center gap-10 w-[100%]">
            <div className="flex items-center justify-center p-4 rounded-[0.25rem] max-w-[12.8125rem] w-[100%] bg-black border border-black font-inter text-white leading-[1.5rem] font-semibold text-[1rem] hover:text-black hover:bg-white cursor-pointer">
              Get Started
            </div>
            <div
              className="flex p-4 justify-center items-center gap-2 max-w-[12.8125rem] w-[100%] border border-black rounded-[0.5rem] hover:bg-black hover:text-gray-50 cursor-pointer font-inter text-black leading-[1.5rem] font-semibold text-[1rem]"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Learn More
              <Image
                src={`${hover ? "/link2.svg" : "link.svg"}`}
                width={20}
                height={20}
                alt="Learn more"
              />
            </div>
          </div>
          <Image
            src="/example.svg"
            alt="Learn more"
            height={520}
            width={1280}
            className="rounded-[0.75rem]"
          />
        </div>
        <div className="overflow-hidden whitespace-nowrap bg-black py-8">
          <Marquee pauseOnHover>
            <div className="flex items-center gap-12 justify-center pl-12 cursor-pointer">
              <Image
                width={134.35296}
                height={9}
                alt="Learn more"
                src="/coin.svg"
              />
              <Image
                width={131.496}
                height={32.964}
                alt="Learn more"
                src="/square.svg"
              />
              <Image
                width={97.89808}
                height={32.964}
                alt="Learn more"
                src="/zoom.svg"
              />
              <Image
                width={179.2}
                height={32}
                alt="Learn more"
                src="/drop.svg"
              />
              <Image
                width={113}
                height={48}
                alt="Learn more"
                src="/google.svg"
              />
              <Image
                width={121}
                height={48}
                alt="Learn more"
                src="/slack.svg"
              />
              <Image
                width={131.496}
                height={32.964}
                src="/square.svg"
                alt="Learn more"
              />
              <Image
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
            clipPath: "inset(10% 0% 0% 0%)",
          }}
          animate={
            isInView
              ? { opacity: 1, clipPath: "inset(0 0 0 0)" }
              : { opacity: 0, clipPath: "inset(10% 0% 0% 0%)" }
          }
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.5 }}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)} // Trigger exit animation
        >
          <div className="flex items-center justify-center px-20 pt-20 pb-10">
            <Image src="/rone.svg" alt="code" width={720} height={480} />
            <div className="text-[#474343] text-[2.5rem] font-medium font-inter leading-120 max-w-[36.2rem] ml-[-1.9rem]">
              Organize projects, assign tasks, and monitor progress in
              real-time.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            clipPath: "inset(10% 0% 0% 0%)",
          }}
          animate={
            inView
              ? { opacity: 1, clipPath: "inset(0 0 0 0)" }
              : { opacity: 0, clipPath: "inset(10% 0% 0% 0%)" }
          }
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.5 }}
          onViewportEnter={() => setInView(true)}
          onViewportLeave={() => setInView(false)} // Trigger exit animation
        >
          <div className="flex items-center justify-center px-20 py-10 animate-appear">
            <div className="text-[#474343] text-[2.5rem] font-medium font-inter leading-120 max-w-[36.2rem] mr-[-1.22rem] z-10">
              Track leads, manage opportunities, and close deals faster.
            </div>
            <Image src="/rtwo.svg" alt="code" width={720} height={480} />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            clipPath: "inset(10% 0% 0% 0%)",
          }}
          animate={
            isVisible
              ? { opacity: 1, clipPath: "inset(0 0 0 0)" }
              : { opacity: 0, clipPath: "inset(10% 0% 0% 0%)" }
          }
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.5 }}
          onViewportEnter={() => setIsVisible(true)}
          onViewportLeave={() => setIsVisible(false)} // Trigger exit animation
        >
          <div className="flex items-center justify-center px-20 pt-10 pb-10 animate-appear">
            <Image src="/rthree.svg" alt="code" width={720} height={480} />
            <div className="text-[#474343] text-[2.5rem] font-medium font-inter leading-120 max-w-[36.2rem] ml-[-3rem]">
              Manage your team, track performance, and streamline workflows
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-12 p-20">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="font-inter text-[3rem] leading-[3.6rem] font-medium text-[#000000]">
              Used by 10K+ businesses
            </h3>
            <h6 className="font-inter text-[1.125rem] leading-[1.575rem] text-[#727272]">
              Hear what our users say about OneCRM and why you should choose
              OneCRM
            </h6>
          </div>
          <div className="flex justify-center relative overflow-hidden h-[20rem]">
            <div className="pointer-events-none absolute top-0 left-0 w-[150px] h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 w-[150px] h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            <Marquee pauseOnHover speed={50}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="group perspective-1000">
                  <div className="flex flex-col px-8 py-8 border border-opacity-56 rounded-lg max-w-[25rem] w-full mx-[1rem] cursor-pointer transition-transform duration-300 group-hover:scale-105">
                    <div className="flex flex-col gap-12">
                      <div className="flex flex-col gap-4">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Image
                              key={i}
                              src="/rating.svg"
                              alt="rating"
                              width={40}
                              height={40}
                            />
                          ))}
                          <Image
                            src="/starhalf.svg"
                            alt="rating"
                            width={24}
                            height={24}
                          />
                        </div>
                        <h6 className="font-inter text-[1.125rem] leading-[1.575rem] text-[#000000] font-medium">
                          {testimonial.review}
                        </h6>
                      </div>
                      <div className="flex gap-6">
                        <div className="rounded-[50%] w-[3rem] h-[3rem] bg-[#727272]"></div>
                        <div className="flex flex-col gap-1">
                          <h5 className="font-inter font-medium text-[1.125rem] leading-[1.575rem] text-[#000000]">
                            {testimonial.name}
                          </h5>
                          <h5 className="font-inter font-normal text-[1.125rem] leading-[1.575rem] text-[#727272]">
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
        <div className="flex justify-center p-20">
          <div className="flex items-center justify-center bg-[#000000] pt-[3.4375rem] pl-[3.5rem] rounded-lg gap-[1.25rem] max-w-[80rem]">
              <div className="flex flex-col gap-10 justify-start">
                <div className="flex flex-col gap-4">
                  <h2 className="text-left text-[3rem] font-inter font-medium leading-[3.6rem] text-white">Take Your Business to the Next Level</h2>
                  <h6 className="font-inter text-[1.125rem] font-normal leading-[1.6875rem] text-left text-white">Join the growing number of businesses that trust our CRM Dashboard to drive their success. Sign up today and start experiencing the benefits of a streamlined and efficient business management system.</h6>
                </div>
                <div className="flex items-center gap-3 mb-12">
                  <div className="flex justify-center items-center py-4 max-w-[12.8125rem] bg-white rounded text-black hover:bg-black hover:text-white font-inter text-[1rem] font-semibold leading-6 cursor-pointer w-full hover:border hover:border-white">
                   Get Started
                  </div>
                  <div className="flex justify-center items-center py-4 max-w-[12.8125rem] bg-black rounded text-white hover:bg-white hover:text-black font-inter text-[1rem] font-semibold leading-6 cursor-pointer border border-white w-full">
                    Contact Us
                  </div>
                </div>
              </div>
              <Image
              src="/think.svg"
              alt="thinking"
              width={555}
              height={403}
              className="rounded-tl-lg rounded-br-lg"
              />
          </div>
        </div>
        <div className="bg-black text-white p-20">
          <div className="flex">
          <div className="flex flex-col gap-6 max-w-[27rem] w-full">
              <h5 className="font-inter font-semibold text-[2rem] leading-[2.4rem] text-white">LOGO</h5>
              <div className="flex gap-4 justify-start">
                <div className="group perspective-1000">
                  <Image width={40} height={40} className="cursor-pointer transition-transform duration-300 group-hover:scale-105" src="/ig.svg" alt="Instagram" />
                </div>
                <div className="group perspective-1000">
                <Image width={40} height={40} className="cursor-pointer transition-transform duration-300 group-hover:scale-105" src="/fb.svg" alt="Facebook" />
                </div>
                <div className="group perspective-1000">
                <Image width={40} height={40} className="cursor-pointer transition-transform duration-300 group-hover:scale-105" src="/in.svg" alt="LinkedIn" />
                </div>
                <div className="group perspective-1000">
                <Image width={40} height={40} className="cursor-pointer transition-transform duration-300 group-hover:scale-105" src="/x.svg" alt="Twitter" />
                </div>
              </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[3.5rem]">
          <div className="grid grid-cols-1 gap-4">
              <div className="group perspective-1000">
              <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">Pages</h5>
              </div>
              <div className="group perspective-1000">
              <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">About Us</h5>
              </div>
              <div className="group perspective-1000">
              <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Features</h5>
              </div>
              <div className="group perspective-1000">
              <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Product</h5>
              </div>
              <div className="group perspective-1000">
              <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Pricing</h5>
              </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <div className="group perspective-1000">
          <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">Company</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Careers</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Guide</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Startup Program</h5>
          </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <div className="group perspective-1000">
          <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">Support</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Help Center</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Customer Support</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">API Doca</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">System Status</h5>
          </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <div className="group perspective-1000">
          <h5 className="font-medium font-inter text-white text-[1.125rem] leading-[1.575rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-bold">Resources</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">FAQ</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Blog</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Privacy Policy</h5>
          </div>
          <div className="group perspective-1000">
          <h5 className="font-normal font-inter text-[#F3F3F3D6] text-[1rem] leading-[1.4rem] cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:font-semibold hover:text-white">Terms of Service</h5>
          </div>
          </div>
          </div>
          </div>
        <div className="text-center font-inter leading-[1.225rem] text-[0.875rem] text-[#F3F3F3D6]">Copyright © 2022. All rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
