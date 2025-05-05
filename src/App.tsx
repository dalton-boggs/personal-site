'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { InterestsIcons, FleurDeLis } from './components/Icons/InterestsIcons'
import styles from './app.module.css'

const App: React.FC = () => {
  return (
      <div className={styles.home}>
          <div className={styles.container}>
              <h1>I&apos;m Dalton.</h1>
              <div className={styles.archHolder}>
                  <h3>I&apos;m a developer who lives in St. Louis.</h3>
                  <FleurDeLis />
              </div>

              <InterestsIcons />
              <div className={styles.icons}>
                  <SocialIcon
                      url="https://www.linkedin.com/in/dalton-boggs/"
                      bgColor="black"
                  />
                  <SocialIcon url="https://github.com/dalton-boggs" bgColor="black" />
              </div>
          </div>
      </div>
  )
}

export default App
