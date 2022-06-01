import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  const smokeWrapperVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
        repeat: Infinity,
        duration: 2,
      },
    },

  };
  return (
    <>
      <div className="logo-icon-wrapper">
        <img src="../images/logo-icon/racoonLogo.png" alt="logo" />
        <div className="coffee-cup-wrapper">
          <motion.div
            className="smoke-wrapper"
            variants={smokeWrapperVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.img src="../images/logo-icon/smoke1.png" alt="smoke-1" />
            <motion.img src="../images/logo-icon/smoke2.png" alt="smoke-2" />
            <motion.img src="../images/logo-icon/smoke3.png" alt="smoke-3" />
          </motion.div>
          <div className="coffee-cup">
            <img src="../images/logo-icon/coffeeCup.png" alt="coffee-cup" />
          </div>
        </div>
      </div>
      {/* <div>loader</div> */}
    </>
  );
}

export default Loader;
