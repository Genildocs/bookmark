import React, { useState } from "react";
import Logo from "../svg/Logo";
import { motion } from "framer-motion";
import Facebook from "../svg/Facebook";
import Twitter from "../svg/Twitter";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navVariants = {
    visible: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      position: "absolute",
      backgroundColor: "hsl(229, 31%, 21%)",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    },
    hidden: {
      display: "block",
    },
  };
  return (
    <motion.nav
      initial={false}
      animate={open ? "visible" : "hidden"}
      variants={navVariants}
      transition={{ type: "Inertia", stiffness: 100 }}
    >
      <div className="flex justify-between mt-11 ml-8 mr-8">
        <div>
          <Logo open={open} />
        </div>
        <button
          className="cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            style={{
              backgroundColor: ["black"],
              width: ["1.2rem"],
              height: ["0.3rem"],
              marginBottom: ["0.3rem"],
            }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: ["black"],
              width: ["1.2rem"],
              height: ["0.3rem"],
              marginBottom: ["0.3rem"],
            }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: ["black"],
              width: ["1.2rem"],
              height: ["0.3rem"],
            }}
          ></motion.div>
        </button>
      </div>

      <motion.div
        className={`${
          open ? "block" : "hidden"
        }  text-white sm:text-black sm:block`}
      >
        <div className=" uppercase text-center text-xl mt-10 ">
          <ul className="flex flex-col items-center">
            <a href="#">
              <li className=" p-5">Features</li>
            </a>
            <a href="#">
              <li className=" p-5">pricing</li>
            </a>
            <a href="#">
              <li className=" p-5">contact</li>
            </a>
            <a
              href="#"
              className="btn text-xl font-medium rounded-md border-2 py-4"
            >
              Login
            </a>
          </ul>
        </div>
      </motion.div>
      <div className="flex justify-center items-center">
        <div className=" mr-8">
          <Facebook />
        </div>
        <div>
          <Twitter />
        </div>
      </div>
    </motion.nav>
  );
}
