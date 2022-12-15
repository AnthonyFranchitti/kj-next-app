import { ReactNode } from "react";

const Services = (props: {
  icon: ReactNode;
  title: string;
  text: string;
  className: string;
}) => {
  const { icon, title, text, className } = props;

  return (
    <div className={className}>
      <div className='relative'>{icon}</div>
      <h3 className='text-2xl mt-10 font-inter-bold'>{title}</h3>
      <p className='text-xl mt-10'>{text}</p>
    </div>
  );
};

export default Services;
