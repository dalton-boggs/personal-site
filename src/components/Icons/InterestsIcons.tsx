'use client'
import React from 'react'
import styles from './icons.module.css'
import bike from './icons/bike.svg'
import airplane from './icons/airplane.svg'
import mountains from './icons/mountains.svg'
import coffee from './icons/coffee.svg'
import bookshelf from './icons/books.svg'
import fleurDeLis from './icons/Fleur-de-lis-fill.svg'

const InterestsIcons: React.FC = () => {
    return (
      <div className={styles.interestsContainer}>
        <h5>Minimalist clip art that represent my interests:</h5>
        <div className={styles.interestsIcons}>
          <img
            className={styles.interests}
            src={bookshelf}
            alt="A bookshelf."
          />
          <img
            className={styles.interests}
            src={bike}
            alt="A neat bicycle"
          />
          <img
            className={styles.interests}
            src={coffee}
            alt="A piping cup of joe"
          />
          <img
            className={styles.interests}
            src={airplane}
            alt="A jet airliner"
          />
          <img
            className={styles.interests}
            src={mountains}
            alt="Idyllic mountains that remind me of those in Colorado."
          />
        </div>
      </div>
    )
  }

const FleurDeLis: React.FC = () => {
    return (
        <img
            className={styles.fleurDeLis}
            src={fleurDeLis}
            alt="A fleur de lis, which symbolizes the confluence of the Missouri and Mississippi rivers north of St. Louis, Missouri."
        />
    )
}

export {InterestsIcons, FleurDeLis}