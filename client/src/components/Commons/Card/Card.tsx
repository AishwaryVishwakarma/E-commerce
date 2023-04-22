import React from 'react'
import { Card } from '../../../model'
import TodaysDeal from "../../Home/First-Fold/FirstFold"

const Card: React.FC<Card> = ({ type, data }) => {
  return <div>{type === 'todays-deal' && <TodaysDeal />}</div>
}

export default Card
