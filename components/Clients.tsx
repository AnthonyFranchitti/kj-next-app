import Image from "next/image";

import bbc from "../public/clients/bbc-black.svg";
import distel from "../public/clients/distell-black.svg";
import engen from "../public/clients/engen-black.svg";
import liquid from "../public/clients/liquid-black.svg";
import microsoft from "../public/clients/microsoft-black.svg";
import multichoice from "../public/clients/multichoice-black.svg";

const clients = [
  {
    name: "BBC",
    image: bbc,
  },
  {
    name: "Distel",
    image: distel,
  },
  {
    name: "Engen",
    image: engen,
  },
  {
    name: "Liquid",
    image: liquid,
  },
  {
    name: "Microsoft",
    image: microsoft,
  },
  {
    name: "Multichoice",
    image: multichoice,
  },
];

const Clients = (props: { className: string }) => {
  const { className } = props;
  return (
    <div className={className}>
      {clients?.map((item) => (
        <div key={item.name} className='relative p-20 mx-10'>
          <div className='absolute top-0 left-0 flex w-full h-full'>
            <Image
              src={item.image}
              fill
              alt={item.name}
              loading='eager'
              className='object-contain'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
