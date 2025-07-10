import './ModaleWin.css'

export default function ModaleWin({shuffleCards}) {
    return (
        <div className='fixed w-full bg-[rgba(0,0,0,0.5)] top-0 left-0 min-h-screen z-50' onClick={shuffleCards}>
            <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
                <img src="img/potion-1.png" alt="Win" className='move [transform-style:preserve-3d] rounded-lg shadow-md'/>
                <h1 className='text-5xl font-Lobster text-center text-white p-5'>You win</h1>
            </div>
        </div>
    )
}
