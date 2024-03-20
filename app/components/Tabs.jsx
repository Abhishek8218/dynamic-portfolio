'use client'
import { useState } from 'react';
import TabButton from './TabButton';
import AboutMe from './About';
import Skillset from './Skillset';
import Interview from './Interview';
import Awards from './Awards';
import Exhibition from './Exhibition';

// Import other tab content components here

const Tabs = ({about,social , skills}) => {
    console.log('about Data in Tab:', about);
 const [activeTab, setActiveTab] = useState('about');

 const handleTabClick = (tab) => {
    setActiveTab(tab);
 };



 return (
    <section className="section about" aria-label="about-me" id="about">
      <div className="container">
        <div className="tab-container">
        <ul className="tab-btn-list">
            <TabButton label="About Me" active={activeTab === 'about'} onClick={() => handleTabClick('about')} />
            <TabButton label="Skillset" active={activeTab === 'skillset'} onClick={() => handleTabClick('skillset')} />
            <TabButton label="Interview" active={activeTab === 'interview'} onClick={() => handleTabClick('interview')} />
            <TabButton label="Awards" active={activeTab === 'awward'} onClick={() => handleTabClick('awward')} />
            <TabButton label="Exhibition" active={activeTab === 'exhibition'} onClick={() => handleTabClick('exhibition')} />
          </ul>
          {activeTab === 'about' && <AboutMe about={about} social={social} />}
          {activeTab === 'skillset' && <Skillset skills={skills} />}
          {activeTab === 'interview' && <Interview />}
          {activeTab === 'awward' && <Awards />}
          {activeTab === 'exhibition' && <Exhibition />}
        </div>
      </div>
    </section>
 );
};

export default Tabs;
