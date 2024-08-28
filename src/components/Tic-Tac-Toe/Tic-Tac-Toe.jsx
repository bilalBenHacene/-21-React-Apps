import React, { useEffect, useState } from 'react'
import './Tic-Tac-Toe.css'

function Square({ value, onClick }) {
    return <button className='square' onClick={onClick}>{value}</button>
}

const TicTacToe = () => {
    const [table, setTable] = useState(Array(9).fill(''));
    const [xTurn, setXTurn] = useState(true);
    const [status, setStatus] = useState('');
    const [endGame, setEndGame] = useState(false);
    const resetGame = () => {
        setEndGame(false)
        return setTable(Array(9).fill(''))
    }
    const getWinner = (table) => {
        const winnerParttner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let index = 0; index < winnerParttner.length; index++) {
            const [x, y, z] = winnerParttner[index];
            if (table[x] && table[x] == table[y] && table[x] == table[z]) {
                return table[x];
            }

        }
        return null;
    }
    useEffect(() => {
        if (!getWinner(table) && table.every(item => item !== '')) {
            setStatus('No one wins ,please try again ...');
            setXTurn(true);
            setEndGame(true);
        } else if (getWinner(table)) {
            setStatus(`Winner is ${getWinner(table)}`);
            setEndGame(true);
            setXTurn(true);
        } else {
            setStatus(`Next player is ${xTurn ? 'X' : 'O'}`);
        }
    }, [table, xTurn]);
    const handleClick = (currentSquare) => {
        let copyTable = [...table];
        if (getWinner(copyTable) || copyTable[currentSquare]) return;
        copyTable[currentSquare] = xTurn ? 'X' : 'O';
        setXTurn(!xTurn);
        setTable(copyTable);
    }
    return (
        <div className='tic-tac-toe'>
            <h1 className='title'>Tic Tac Toe</h1>
            <div className="status-bar">
                <p>{status}</p>
                {
                    endGame && <button type="reset" onClick={resetGame}>Reset Game</button>
                }

            </div>
            <section className='game-block '>
                <div className="row ">
                    <Square value={table[0]} onClick={() => handleClick(0)} />
                    <Square value={table[1]} onClick={() => handleClick(1)} />
                    <Square value={table[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={table[3]} onClick={() => handleClick(3)} />
                    <Square value={table[4]} onClick={() => handleClick(4)} />
                    <Square value={table[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={table[6]} onClick={() => handleClick(6)} />
                    <Square value={table[7]} onClick={() => handleClick(7)} />
                    <Square value={table[8]} onClick={() => handleClick(8)} />
                </div>
            </section>
        </div>
    )
}

export default TicTacToe