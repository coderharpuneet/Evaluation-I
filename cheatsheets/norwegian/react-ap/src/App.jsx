import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const flashcards = document.querySelectorAll('.flashcard');
let currentIndex = 0; // Track the current flashcard index

function updateFlashcardVisibility() {
    flashcards.forEach((flashcard, index) => {
        flashcard.style.display = index === currentIndex ? 'block' : 'none'; // Show current card only
    });
}

flashcards.forEach((flashcard) => {
    const prevButton = flashcard.querySelector('.prev-btn');
    const nextButton = flashcard.querySelector('.next-btn');
    const flashcardContent = flashcard.querySelector('.flashcard-content');

    let isFlipped = false;

    prevButton.addEventListener('click', () => {
        if (isFlipped) {
            flashcardContent.classList.remove('flipped');
            isFlipped = false;
        } else {
            // Move to previous flashcard
            if (currentIndex > 0) {
                currentIndex--;
                updateFlashcardVisibility();
                isFlipped = false; // Reset flip state when changing card
                flashcardContent.classList.remove('flipped'); // Ensure the new card is not flipped
            }
        }
    });

    nextButton.addEventListener('click', () => {
        if (isFlipped) {
            flashcardContent.classList.remove('flipped');
            isFlipped = false;
        } else {
            // Move to next flashcard
            if (currentIndex < flashcards.length - 1) {
                currentIndex++;
                updateFlashcardVisibility();
                isFlipped = false; // Reset flip state when changing card
                flashcardContent.classList.remove('flipped'); // Ensure the new card is not flipped
            }
        }
    });

    flashcard.addEventListener('mouseover', () => {
        flashcardContent.classList.add('flipped');
    });

    flashcard.addEventListener('mouseout', () => {
        flashcardContent.classList.remove('flipped');
    });
});

// Initialize the visibility
updateFlashcardVisibility();
  return (
    <>
      <div>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Languages</a>
          <a href="#">Login</a>
          <a href="#">Signup</a>
          <a href="#">Contact Us</a>
        </div>
      </div>


      <div className="head">
        <h1>Quick Reference: Dutch Alphabet & Common Phrases</h1>
    </div> 
    <hr/>
    <div className="alphabets">
        <img src="/Images/alphabets.jpg"/>
    </div>
    <div className="text">
        <h2>Here are 10 of the most common phrases that are a must learn as a beginner.</h2>
    </div>
    <div className="container">
        <ul className="responsive-table">
            <li className="table-header">
                <div className="col col-1">DUTCH</div>
                <div className="col col-2">ENGLISH</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Hallo</div>
                <div className="col col-2" data-label="Customer Name">Hello</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Hoe gaat het?</div>
                <div className="col col-2" data-label="Customer Name">How are you?</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Goedemorgen</div>
                <div className="col col-2" data-label="Customer Name">Good morning</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Goedemiddag</div>
                <div className="col col-2" data-label="Customer Name">Good afternoon</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Goedenacht</div>
                <div className="col col-2" data-label="Customer Name">Good night</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Dank je</div>
                <div className="col col-2" data-label="Customer Name">Thank you</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Alsjeblieft</div>
                <div className="col col-2" data-label="Customer Name">Please</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Waar is de badkamer?</div>
                <div className="col col-2" data-label="Customer Name">Where is the bathroom?</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Het spijt me</div>
                <div className="col col-2" data-label="Customer Name">I'm sorry</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Tot ziens</div>
                <div className="col col-2" data-label="Customer Name">See you later</div>
            </li>
        </ul>
    </div>




      
    <div className="flashcard-container">
        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "Hello"?</div>
                <div className="back">Hallo</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "Thank you"?</div>
                <div className="back">Dank je wel</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "Goodbye"?</div>
                <div className="back">Tot ziens</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "Please"?</div>
                <div className="back">Alstublieft</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "Good morning"?</div>
                <div className="back">Goedemorgen</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "Good night"?</div>
                <div className="back">Goedenacht</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "How are you?"</div>
                <div className="back">Hoe gaat het met je?</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "I love you"?</div>
                <div className="back">Ik hou van je</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "Excuse me"?</div>
                <div className="back">Excuseer me</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        <div className="flashcard">
            <div className="flashcard-content">
                <div className="front">What is the Dutch for "See you later"?</div>
                <div className="back">Tot later</div>
            </div>
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>
    </div>
        </div>
    </>
  )
}

export default App