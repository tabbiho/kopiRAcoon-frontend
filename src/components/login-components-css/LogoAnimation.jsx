import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

function LogoAnimation() {
  return (
    <Box id="login-top-banner">
      <motion.div
        id="logo-login"
        animate={{
          borderRadius: ['50%', '20%', '20%', '50%', '50%'],
        }}
        transition={{ duration: 1.3 }}
      >
        <img src="../../images/logo-icon/full-login-logo.png" alt="racoonLogo" id="logo-racoon" />
      </motion.div>
    </Box>
  );
}

export default LogoAnimation;
