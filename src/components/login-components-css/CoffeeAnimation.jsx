import React from 'react';
import { motion } from 'framer-motion';

function CoffeeAnimation() {
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
      <div id="logo-icon-wrapper-profile">
        <div id="coffee-cup-wrapper-profile">
          <motion.div
            className="smoke-wrapper profile"
            variants={smokeWrapperVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.img src="../../images/logo-icon/smok1.png" alt="smoke-1" />
            <motion.img src="../../images/logo-icon/smok2.png" alt="smoke-2" />
            <motion.img src="../../images/logo-icon/smok3.png" alt="smoke-3" />
          </motion.div>
        </div>
        <img id="coffee-cup-profile" src="../../images/logo-icon/coffeeCup-outline-profile.png" alt="logo-coffe-cup" />
      </div>
      {/* <div>loader</div> */}
    </>
  );
}

export default CoffeeAnimation;
