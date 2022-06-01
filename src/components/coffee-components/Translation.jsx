import React, { useContext } from 'react';
import { Box, Select } from '@chakra-ui/react';
import i18n from '../../i18n.js';
import AppContext from '../../functions.jsx';

function Translation() {
  const { t } = useContext(AppContext);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Box mb={2}>
      {i18n.language !== 'en' && (
      <Box bg="cornflowerblue" w="100%" borderRadius={5} p={2} color="white">
        Show this card to your Barista
        <hr />
        {t('help')}
        <br />
        {t('appDescription')}
      </Box>
      )}
      Translate for your Barista:
      <Select onChange={handleLanguageChange} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="cnS">Chinese (Simplified)</option>
        <option value="cnT">Chinese (Traditional)</option>
        <option value="kr">Korean</option>
        <option value="jp">Japanese</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </Select>
    </Box>
  );
}
export default Translation;
