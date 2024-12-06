import React, { useState } from 'react'

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  const choices = ['rock', 'paper', 'scissors']
  const images = {
    rock: '/assets/rock.png',
    paper: '/assets/paper.png',
    scissors: '/assets/scissors.png'
  }

  const handlePlay = () => {
    if (userChoice === null) return
    const randomChoice = choices[Math.floor(Math.random() * 3)]
    setComputerChoice(randomChoice)

    if (userChoice === randomChoice) {
      setResult('It\'s a draw!')
    } else if (
      (userChoice === 'rock' && randomChoice === 'scissors') ||
      (userChoice === 'paper' && randomChoice === 'rock') ||
      (userChoice === 'scissors' && randomChoice === 'paper')
    ) {
      setResult('You win!')
      setUserScore(userScore + 1)
    } else {
      setResult('You lose!')
      setComputerScore(computerScore + 1)
    }

    setIsGameOver(true)
  }

  const handleChoice = (choice) => {
    setUserChoice(choice)
    setComputerChoice(null)
    setResult('')
    setIsGameOver(false)
  }

  const handlePlayAgain = () => {
    setUserChoice(null)
    setComputerChoice(null)
    setResult('')
    setIsGameOver(false)
  }

  return (
    <div className='w-screen h-screen grid grid-cols-2 grid-rows-2'>
      <div className='bg-red-600 flex justify-center items-center'>
        {computerChoice && <img src={images[computerChoice]} alt={computerChoice} className='rounded-full w-40 h-40' />}
      </div>
      <div className='bg-green-600 flex justify-center items-center space-x-4'>
        {!userChoice ? (
          choices.map(choice => (
            <img 
              key={choice}
              src={images[choice]}
              alt={choice}
              className='rounded-full w-40 h-40 transform transition-transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500'
              onClick={() => handleChoice(choice)}
            />
          ))
        ) : (
          <img src={images[userChoice]} alt={userChoice} className='rounded-full w-40 h-40' />
        )}
      </div>
      <div className='bg-blue-600 col-span-2 flex flex-col justify-center items-center space-y-4'>
        {!isGameOver ? (
          <>
            <button
              className='bg-yellow-400 rounded-lg w-20 h-20 hover:bg-yellow-600'
              onClick={handlePlay}
            >
              Play
            </button>
            <div className='text-white text-xl'>{result}</div>
          </>
        ) : (
          <>
            <div className='text-white text-xl'>{result}</div>
            <button
              className='bg-yellow-400 rounded-lg w-20 h-20 hover:bg-yellow-600'
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
          </>
        )}
        <div className='text-white text-xl'>
          Score: You - {userScore} | Computer - {computerScore}
        </div>
      </div>
    </div>
  )
}

export default App
