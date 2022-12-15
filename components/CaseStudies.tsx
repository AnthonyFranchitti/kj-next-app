import Line from "./Line";

const CaseStudies = (props: {
  className: string;
  image?: string;
  title?: string;
  description?: string;
}) => {
  const { className, image, title, description } = props;
  return (
    <div className={className}>
      <div
        className='absolute top-0 left-0 p-8 w-full h-full flex flex-col justify-end items-start'
        style={{
          backgroundImage: `url(${image})`,
          // backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Line className='h-1 w-10 bg-kj-primary-active mb-6' />
        <h3 className='text-4xl text-white font-inter-semi-bold mb-6'>
          {title}
        </h3>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  );
};

export default CaseStudies;
