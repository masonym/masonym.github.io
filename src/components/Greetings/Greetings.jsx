import React, { useState, useEffect } from 'react';
import styles from './Greetings.module.css'

const greetings = {
    French: "Bonjour",
    Spanish: "Hola",
    German: "Hallo",
    Italian: "Ciao",
    Portuguese: "Olá",
    Japanese: "こんにちは", // Konnichiwa
    Chinese: "你好", // Nǐ hǎo
    Korean: "안녕하세요", // Annyeonghaseyo
    Arabic: "مرحبا", // Marhaban
    Russian: "Здравствуйте", // Zdravstvuyte
    Hindi: "नमस्ते", // Namaste
    Bengali: "হ্যালো", // Hyālō
    Swahili: "Habari",
    Dutch: "Hallo",
    Greek: "Γεια σας", // Geia sas
    Swedish: "Hej",
    Turkish: "Merhaba",
    Polish: "Cześć",
    Vietnamese: "Xin chào",
    Thai: "สวัสดี", // Sawatdi
    Hebrew: "שלום", // Shalom
    Danish: "Hej",
    Finnish: "Hei",
    Norwegian: "Hei",
    Czech: "Ahoj",
    Hungarian: "Szia",
    Romanian: "Salut",
    Indonesian: "Halo",
    Malay: "Hello",
    Tagalog: "Kamusta",
    Urdu: "ہیلو", // Hello
    Persian: "سلام", // Salaam
    Amharic: "ሰላም", // Selam
    Zulu: "Sawubona",
    Yoruba: "Bawo",
    Igbo: "Ndewo",
    Hausa: "Sannu",
    Ukrainian: "Привіт", // Pryvit
    Croatian: "Bok",
    Serbian: "Здраво", // Zdravo
    Bulgarian: "Здравей", // Zdravey
    Slovak: "Ahoj",
    Slovenian: "Zdravo",
    Estonian: "Tere",
    Latvian: "Sveiki",
    Lithuanian: "Labas",
    Albanian: "Përshëndetje",
    Mongolian: "Сайн уу", // Sain uu
    Kazakh: "Сәлем", // Sälem
};

const Greetings = () => {
    const [visibleGreetings, setVisibleGreetings] = useState([]);
    const [positions, setPositions] = useState({});
  
    useEffect(() => {
      const greetingsList = Object.entries(greetings).filter(([lang]) => lang !== 'English');
      let index = 0;
  
      const interval = setInterval(() => {
        if (index < greetingsList.length) {
          const [lang, greeting] = greetingsList[index];
          setVisibleGreetings(prev => [...prev, { lang, greeting }]);
          setPositions(prev => ({
            ...prev,
            [lang]: {
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }
          }));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 1000); // Add a new greeting every second
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '3.6em',
          fontWeight: 'bold'
        }}>
          Hello!
        </div>
        {visibleGreetings.map(({ lang, greeting }) => (
          <div
            key={lang}
            style={{
              position: 'absolute',
              left: positions[lang]?.left,
              top: positions[lang]?.top,
              transform: 'translate(-50%, -50%)',
              padding: '10px',
              opacity: 0,
              animation: 'fadeIn 1s forwards',
            }}
          >
            <div className={styles.greetingsText}>{greeting}!</div>
          </div>
        ))}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    );
  };

export default Greetings;  