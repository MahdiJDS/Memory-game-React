import { useState, useEffect } from "react"
import SingleCard from "./Componnets/SingleCard"
import ModaleWin from "./Componnets/ModaleWin"

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [win, setWin] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setWin(false)

    console.log(cards, turns)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setWin(true);
    }
  }, [cards]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn + 1)
    setDisabled(false)
  }


  return (
    <div className="flex flex-col pt-5 items-center gap-5 bg-gray-800 min-h-screen">
      <h1 className='font-Lobster text-3xl text-cyan-300'>Memore Game</h1>
      <button className='font-mono bg-transparent border-2 p-2 text-white border-white rounded-md hover:-translate-y-1 duration-300 hover:border-red-600 hover:text-red-600' onClick={shuffleCards}>New Game</button>

      {win && (
        <ModaleWin shuffleCards = {shuffleCards}/>
      )}


      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className="text-white p-5 text-lg">Turns: {turns}</p>
    </div>
  );
}

export default App;
