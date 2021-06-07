import React from 'react'
import { Year, Square } from './year-container.styles'
import { SquareT } from '../../types/types.constants'
const squares: SquareT[] = []

for(let i = 0; i < 366; i++){
    squares.push({id: i, date: new Date().toISOString(), isComplete: false, logId: 'logId' })
}
const YearContainer = () => (
    <Year>
        {squares.map(() => <Square />)}
    </Year>
)

export default YearContainer