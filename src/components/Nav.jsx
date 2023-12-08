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
      justifyContent: "space-between",
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
            animate={
              open
                ? {
                    rotate: 40,
                    backgroundColor: "white",
                    x: 2,
                    y: 0,
                  }
                : { x: 0 }
            }
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: ["black"],
              width: ["1.2rem"],
              height: ["0.3rem"],
              marginBottom: ["0.3rem"],
            }}
            animate={open ? { display: "none" } : { display: "block" }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: ["black"],
              width: ["1.2rem"],
              height: ["0.3rem"],
            }}
            animate={
              open
                ? {
                    rotate: -45,
                    backgroundColor: "white",
                    x: 1,
                    y: -10,
                  }
                : { x: 0 }
            }
            transition={{ duration: 0.2 }}
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
            <motion.a href="#" whileHover={{ color: "hsl(0, 94%, 66%)" }}>
              <li className=" p-5">Features</li>
            </motion.a>
            <motion.a href="#" whileHover={{ color: "hsl(0, 94%, 66%)" }}>
              <li className=" p-5">pricing</li>
            </motion.a>
            <motion.a href="#" whileHover={{ color: "hsl(0, 94%, 66%)" }}>
              <li className=" p-5">contact</li>
            </motion.a>
            <motion.a
              href="#"
              className="btn text-xl font-medium rounded-md border-2 py-4"
              whileHover={{
                border: "2px solid  hsl(0, 94%, 66%)",
                color: "hsl(0, 94%, 66%)",
              }}
            >
              Login
            </motion.a>
          </ul>
        </div>
      </motion.div>
      <div className="flex justify-center items-center mb-12">
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
