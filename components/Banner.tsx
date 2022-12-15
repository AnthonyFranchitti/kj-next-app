import Slider from "react-slick";
import Button from "./Button";

const images = [
  {
    id: "banner-1",
    url: "/banner/confidence.jpg",
    heading: "Live with Confidence",
    text: "José Mourinho brings confidence to pan-African Sanlam campaign.",
    buttonText: "View Project",
  },
  {
    id: "banner-2",
    url: "/banner/confidence.jpg",
    heading: "Live with More Confidence",
    text: "José Mourinho brings confidence to pan-African Sanlam campaign.",
    buttonText: "View Project",
  },
];

const Banner = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='w-full'>
      <Slider {...settings}>
        {images?.map((image) => (
          <div key={image.id}>
            <div
              className='w-full h-20 relative pt-[60%] xl:pt-[35%]'
              style={{
                backgroundImage: `url(${image.url})`,
                // backgroundImage: `url(${externalImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className='flex max-w-9xl flex-col py-[5%] md:py-[20%] xl:py-60 justify-end items-start absolute w-full xl:h-full top-0 left-2/4 -translate-x-2/4 text-white'>
                <div className='flex flex-col w-full xl:w-6/12  justify-between items-start'>
                  <h3 className='text-2xl xl:text-5xl xl:text-2xl p-0 text-white font-inter-bold mb-5 xl:mb-10'>
                    {image.heading}
                  </h3>
                  <p className='xl:text-xl leading-10 mb-5 xl:mb-10'>
                    {image.text}
                  </p>
                  <Button
                    id='ViewProject'
                    name='ViewProject'
                    value='View Project'
                    className='rounded-3xl bg-kj-primary-main px-4 py-2 text-white font-inter-semi-bold cursor-pointer'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='' style={{ backgroundImage: "url()" }}>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default Banner;
