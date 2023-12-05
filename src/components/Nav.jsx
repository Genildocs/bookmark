import React, { useState } from 'react';
import Logo from '../svg/Logo';
import { motion } from 'framer-motion';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navVariants = {
    visible: {
      position: 'absolute',
      backgroundColor: 'hsl(229, 31%, 21%)',
      height: '100vh',
      width: '100%',
      margin: '0',
      padding: '0 2rem',
      paddingTop: '2.75rem',
      overflow: 'hidden',
    },
    hidden: {
      display: 'block',
    },
  };
  return (
    <motion.nav
      className="mt-11 ml-8 mr-8"
      initial={false}
      animate={open ? 'visible' : 'hidden'}
      variants={navVariants}
    >
      <div className="flex justify-between">
        <div>
          <Logo open={open} />
        </div>
        <button
          className="cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            style={{
              backgroundColor: ['black'],
              width: ['1.2rem'],
              height: ['0.3rem'],
              marginBottom: ['0.3rem'],
            }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: ['black'],
              width: ['1.2rem'],
              height: ['0.3rem'],
              marginBottom: ['0.3rem'],
            }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: ['black'],
              width: ['1.2rem'],
              height: ['0.3rem'],
            }}
          ></motion.div>
        </button>
      </div>

      <motion.div
        className={`${
          open ? 'block' : 'hidden'
        }  text-white sm:text-black sm:block`}
      >
        <div className=" uppercase text-center text-xl mt-10 ">
          <ul>
            <a href="#">
              <li className=" p-5">Features</li>
            </a>
            <a href="#">
              <li className=" p-5">pricing</li>
            </a>
            <a href="#">
              <li className=" p-5">contact</li>
            </a>
          </ul>
          <a href="#" className=" text-xl font-medium">
            Login
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
