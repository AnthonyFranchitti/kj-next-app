import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Fragment } from "react";
import logo from "../public/logo-white.svg";
import Button from "./Button";

const navigation = [
  { name: "Services", href: "#", current: false },
  { name: "Industries", href: "#", current: false },
  { name: "Cases", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const Navbar = (props: any) => {
  return (
    <Disclosure as='nav' className='bg-kj-primary-main p-4'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-9xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-between px-4'>
                <div className='flex flex-shrink-0 items-center'>
                  <div className='relative w-14 h-14'>
                    <Image
                      src={logo}
                      fill
                      alt=''
                      loading='eager'
                      className='object-contain'
                    />
                  </div>

                  {/* <img
                    className='block h-8 w-auto lg:hidden'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='Your Company'
                  />
                  <img
                    className='hidden h-8 w-auto lg:block'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='Your Company'
                  /> */}
                </div>
                <div className='hidden sm:ml-6 sm:flex flex-col justify-center'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-kj-primary-active"
                            : "hover:bg-kj-primary-hover",
                          "px-3 py-2 text-white text-base font-semibold rounded-2xl"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='hidden sm:ml-6 sm:flex flex-col justify-center items-center'>
                  {/* <input
                    type='button'
                    id='letsTalk'
                    name='letsTalk'
                    value='Lets Talk'
                    className='rounded-3xl bg-white px-4 py-2 text-kj-primary-main font-semibold'
                  ></input> */}
                  <Button
                    id='letsTalk'
                    name='letsTalk'
                    value='Lets Talk'
                    className='rounded-3xl bg-white px-4 py-2 text-kj-primary-main font-inter-semi-bold cursor-pointer'
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
