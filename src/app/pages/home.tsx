import Image from "next/image";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="flex justify-between px-20 py-6 items-center">
          <h4 className="font-inter text-[1.5rem] text-black leading-120 font-medium">
            LOGO
          </h4>
          <div className="flex justify-center items-center gap-10">
            <h5 className="text-hero text-[1.125rem] leading-140 font-inter font-medium">
              About
            </h5>
            <h5 className="text-hero text-[1.125rem] leading-140 font-inter font-medium">
              Features
            </h5>
            <h5 className="text-hero text-[1.125rem] leading-140 font-inter font-medium">
              Pricing
            </h5>
            <h5 className="text-hero text-[1.125rem] leading-140 font-inter font-medium">
              Blog
            </h5>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center border border-dynamic-black rounded-lg text-white text-sm font-medium font-Inter leading-[1.3125rem] px-3 py-2 shadow-custom-shadow bg-neutral hover:text-black hover:bg-white transition-all duration-500 ease-in-out hover:cursor-pointer">
              Purchase Now
            </div>
            <div className="flex justify-center items-center rounded-lg border border-action-outline-base px-3 py-2 text-sm font-medium leading-[1.3125rem] font-inter text-content-dark hover:bg-black hover:text-white transition-all duration-500 ease-in-out hover:cursor-pointer">
              View Demo
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 p-20 items-center">
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
            <div className="flex p-4 justify-center items-center gap-2 max-w-[12.8125rem] w-[100%] border border-black rounded-[0.5rem] hover:bg-black hover:text-gray-50 cursor-pointer font-inter text-black leading-[1.5rem] font-semibold text-[1rem]">
              Learn More
              <Image src="/link.svg" width={20} height={20} alt="Learn more" />
            </div>
          </div>
          <Image
            src="/example.svg"
            alt="Learn more"
            height={520}
            width={1280}
            className="rounded-[0.75rem] self-stretch"
          />
        </div>
        <div className="overflow-hidden whitespace-nowrap bg-black py-8">
            <Marquee>
            <div className="flex items-center gap-12 justify-center pl-12">
            <Image width={134.35296} height={9} alt="Learn more" src="/coin.svg" />
            <Image width={131.496} height={32.964} alt="Learn more" src="/square.svg" />
            <Image width={97.89808} height={32.964} alt="Learn more" src="/zoom.svg" />
            <Image width={179.2} height={32} alt="Learn more" src="/drop.svg" />
            <Image width={113} height={48} alt="Learn more" src="/google.svg" />
            <Image width={121} height={48} alt="Learn more" src="/slack.svg" />
            <Image width={131.496} height={32.964} src='/square.svg' alt="Learn more" />
            <Image src="/zoom.svg" width={97.89808} height={32.964} alt="Learn more" />
            {/* <Image width={134.35296} height={9} src="/coin.svg" alt="Learn more" /> */}
          </div>
            </Marquee>
          {/* <div className="animate-marquee flex items-center gap-12">
            <Image width={134.35296} height={9} alt="Learn more" src="/coin.svg" />
            <Image width={131.496} height={32.964} alt="Learn more" src="/square.svg" />
            <Image width={97.89808} height={32.964} alt="Learn more" src="/zoom.svg" />
            <Image width={179.2} height={32} alt="Learn more" src="/drop.svg" />
            <Image width={113} height={48} alt="Learn more" src="/google.svg" />
            <Image width={121} height={48} alt="Learn more" src="/slack.svg" />
            <Image width={131.496} height={32.964} src='/square.svg' alt="Learn more" />
            <Image src="/zoom.svg" width={97.89808} height={32.964} alt="Learn more" />
            <Image width={134.35296} height={9} src="/coin.svg" alt="Learn more" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
