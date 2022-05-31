import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      coffee: 'Coffee',
      milk: 'Milk',
      water: 'Water',
      temperature: 'Temperature',
      hot: 'Hot',
      cold: 'Iced',
      none: 'None',
      sugar: 'Sugar',
      less: 'Less',
      regular: 'Regular',
      more: 'More',
      condMilk: 'Condensed Milk',
      evapMilk: 'Evaporated Milk',
    },
  },
  cnS: {
    translation: {
      coffee: '咖啡',
      milk: '牛奶',
      water: '水',
      temperature: '温度',
      hot: '烧',
      cold: '冷',
      none: '无',
      sugar: '糖',
      less: '少',
      regular: '普通',
      more: '多',
      condMilk: '炼乳',
      evapMilk: '淡奶',
      help: '请帮我按照以上的食谱做这杯咖啡。',
      appDescription: '这个手机应用是为了帮助每个人都能接触到他们最喜欢的咖啡, 无论他们身在何处。',
    },
  },
  cnT: {
    translation: {
      coffee: '咖啡',
      milk: '牛奶',
      water: '水',
      temperature: '溫度',
      hot: '燒',
      cold: '冷',
      none: '無',
      sugar: '糖',
      less: '少',
      regular: '普通',
      more: '多',
      condMilk: '煉乳',
      evapMilk: '淡奶',
      help: '請幫我按照以上的食譜做這杯咖啡。',
      appDescription: '這個手機應用是為了幫助每個人都能接觸到他們最喜歡的咖啡, 無論他們身在何處。',
    },
  },
  kr: {
    translation: {
      coffee: '커피',
      milk: '우유',
      water: '물',
      temperature: '온도',
      hot: '뜨거운',
      cold: '아이스',
      none: '없음',
      sugar: '설탕',
      less: '조금',
      regular: '보통',
      more: '더',
      condMilk: '농축 우유',
      evapMilk: '증발 우유',
      help: '위의 레시피에 따라 이 커피를 만들 수 있도록 도와주세요.',
      appDescription: '이 모바일 앱은 모든 사람이 장소에 관계없이 좋아하는 커피에 접근할 수 있도록 하기 위해 만들어졌습니다.',
    },
  },
  jp: {
    translation: {
      coffee: 'コーヒー',
      milk: '牛乳',
      water: '水',
      temperature: '温度',
      hot: '熱い',
      cold: 'アイス',
      none: 'なし',
      sugar: '砂糖',
      less: '少し',
      regular: '通常',
      more: 'もっと',
      condMilk: '練乳',
      evapMilk: '無糖練乳',
      help: '上記のレシピに従ってこのコーヒーを作るのを手伝ってください。',
      appDescription: 'このモバイルアプリは、誰もが場所に関係なくお気に入りのコーヒーにアクセスできるようにするために作成されました。',
    },
  },
  es: {
    translation: {
      coffee: 'Café',
      milk: 'Leche',
      water: 'Agua',
      temperature: 'Temperatura',
      hot: 'Caliente',
      cold: 'Helado',
      none: 'Sin',
      sugar: 'Azúcar',
      less: 'Menos',
      regular: 'Regular',
      more: 'Más',
      condMilk: 'Leche Condensada',
      evapMilk: 'Leche Evaporada',
      help: 'Por favor, ayúdame a hacer este café de acuerdo con la receta anterior.',
      appDescription: 'Esta aplicación móvil fue creada para ayudar a que todos tengan acceso a su café favorito, sin importar dónde se encuentren.',
    },
  },
  fr: {
    translation: {
      coffee: 'Café',
      milk: 'Lait',
      water: 'Eau',
      temperature: 'Température',
      hot: 'Chaud',
      cold: 'Glacé',
      none: 'Pas',
      sugar: 'Sucre',
      less: 'Moins',
      regular: 'Régulier',
      more: 'Plus',
      condMilk: 'Lait Condensé',
      evapMilk: 'Lait Évaporé',
      help: "S'il vous plaît aidez-moi à faire ce café selon la recette ci-dessus.",
      appDescription: "Cette application mobile a été créée pour permettre à chacun d'avoir accès à son café préféré, où qu'il se trouve.",
    },
  },
  de: {
    translation: {
      coffee: 'Kaffee',
      milk: 'Milch',
      water: 'Wasser',
      temperature: 'Temperatur',
      hot: 'Heißer',
      cold: 'Eis',
      none: 'Ohne',
      sugar: 'Zucker',
      less: 'Weniger',
      regular: 'Regulär',
      more: 'Mehr',
      condMilk: 'Gezuckerte Kondensmilch',
      evapMilk: 'Kondensmilch',
      help: 'Bitte helfen Sie mir, diesen Kaffee nach obigem Rezept zuzubereiten.',
      appDescription: 'Diese mobile App wurde entwickelt, damit jeder Zugriff auf seinen Lieblingskaffee hat, egal wo er sich befindet.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
