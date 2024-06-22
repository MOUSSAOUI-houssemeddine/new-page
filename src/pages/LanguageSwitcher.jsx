import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
                <header className="flex bg-darkGreen1 h-full w-full text-white  py-4 ">
<button> --- Back</button>

</header>
      <h1>Language Switcher</h1>
      <div className="flex flex-col  ">
      <button className="p-2 rounded-full w-full shadow-xl mt-4 bg-darkGreen3 text-white" onClick={() => handleChangeLanguage('en')}>English</button>
      <button className="p-2 rounded-full w-full shadow-xl mt-4 bg-darkGreen3 text-white" onClick={() => handleChangeLanguage('fr')}>French</button>
      <button className="p-2 rounded-full w-full shadow-xl mt-4 bg-darkGreen3 text-white" onClick={() => handleChangeLanguage('ar')}>Arabic</button>

      <div className='mt-4 '>
        {language === 'en' && <p>This is in English</p>}
        {language === 'fr' && <p>C'est en français</p>}
        {language === 'ar' && <p>هذا بالعربية</p>}
      </div>
    </div>
    </div>
  );
};

export default LanguageSwitcher;
