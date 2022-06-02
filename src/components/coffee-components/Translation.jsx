import React, { useContext } from 'react';
import { Box, Select, Text } from '@chakra-ui/react';
import i18n from '../../i18n.js';
import AppContext from '../../functions.jsx';

function Translation() {
  const { t } = useContext(AppContext);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Box id="translation-option">
      <Text id="barista-translate-text" my={2}>
        Translate for your Barista:
      </Text>
      <Select colorScheme="gray" onChange={handleLanguageChange} defaultValue={i18n.language} my={2}>
        <option value="en">English</option>
        <option value="cnS">Chinese (Simplified)</option>
        <option value="cnT">Chinese (Traditional)</option>
        <option value="kr">Korean</option>
        <option value="jp">Japanese</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </Select>
      {i18n.language !== 'en' && (
      <Box textAlign="center" id="translation-card" w="100%" borderRadius={5} p={3}>
        <Text mb={1} fontSize="lg">
          Show this card to your Barista
        </Text>
        <hr />
        <Text mt={2} fontSize="md" lineHeight="200%">
          {t('help')}
          <br />
          {t('appDescription')}
        </Text>
      </Box>
      )}
    </Box>
  );
}
export default Translation;
