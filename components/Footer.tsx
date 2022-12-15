import Link from "next/link";
import Line from "./Line";

const Footer = () => {
  return (
    <div className='w-full p-2 xl:p-20 bg-kj-primary-main'>
      <div className='w-auto mx-auto max-w-9xl flex flex-col'>
        {/* row */}
        <div className='flex justify-start items-center mt-5 xl:mt-0 mb-14'>
          <Line className='h-1 w-10 bg-kj-primary-active' />
          <h2 className='text-xl ml-5 text-white'>Contact Us</h2>
        </div>
        {/* row */}
        <div className='w-full flex flex-col xl:flex-row  justify-between items-center mb-14'>
          <h3 className='w-full xl:w-5/12 text-5xl font-inter-bold text-white mb-10 xl:mb-0'>
            Have a project in mind? Let's make it happen
          </h3>
          <div className='w-full xl:w-4/12 flex flex-col'>
            <p className='text-white text-xl leading-8'>
              22 Lawley Road, Woodstock, 7925, <br />
              Cape Town, South Africa
              <br />
              <a href='tel:+27214691500'>+27 21 469 1500</a>
              <br />
              <a
                href='mailto:enquirie@kingjames.co.za'
                className='underline underline-offset-4'
              >
                enquirie@kingjames.co.za
              </a>
            </p>
          </div>
        </div>
        {/* row */}
        <div className='grid grid-cols-2 xl:grid-cols-12 gap-6 xl:gap-0'>
          <div className='xl:col-span-2 flex flex-col justify-start items-start'>
            <Link href='/' className='text-white text-xl mb-2'>
              Terms of service
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              Privacy policy
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              Impressum
            </Link>
          </div>
          <div className='xl:col-span-2 flex flex-col justify-start items-start'>
            <Link href='/' className='text-white text-xl mb-2'>
              Facebook
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              Instagram
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              Twitter
            </Link>
          </div>
          <div className='xl:col-span-2 flex flex-col justify-start items-start'>
            <Link href='/' className='text-white text-xl mb-2'>
              Github
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              LinkedIn
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              Teams
            </Link>
          </div>
          <div className='xl:col-span-2 flex flex-col justify-start items-start'>
            <Link href='/' className='text-white text-xl mb-2'>
              YouTube
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              Behance
            </Link>
            <Link href='/' className='text-white text-xl mb-2'>
              Dribble
            </Link>
          </div>
          <div className='xl:col-span-4 flex flex-col justify-start items-start'>
            <Link href='/' className='text-white text-xl mb-2'>
              Explore open jobs
            </Link>
            <p>&nbsp;</p>
            <p className='text-white text-xl mb-2'>
              ©2000—2022 King James Digital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
