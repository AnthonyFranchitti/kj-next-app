import classNames from "classnames";
import { ReactNode } from "react";
import Line from "./Line";

const Section = (props: {
  columns?: number;
  heading: string;
  subHeading?: string;
  children: ReactNode;
  className: string;
}) => {
  const { columns = 12, heading, subHeading, children, className } = props;
  return (
    <section className={className}>
      <div className='flex justify-start items-center mb-10'>
        <Line className='h-1 w-10 bg-kj-primary-active' />
        <h2 className='text-xl ml-5 text-black'>{heading}</h2>
      </div>
      {subHeading && (
        <h3 className='xl:w-10/12 text-xl xl:text-5xl font-inter-bold text-black'>
          {subHeading}
        </h3>
      )}

      <div
        className={`w-full ${
          columns > 0
            ? `grid grid-cols-${columns}`
            : "flex justify-between items-center"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
