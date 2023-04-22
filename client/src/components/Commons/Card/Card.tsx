import React from 'react'
import { genericCard } from '../../../model'
import TodaysDealCard from '../Cards/TodaysDeal/TodaysDealCard'

const Card: React.FC<genericCard> = ({ type, data }) => {

  return (
    <div>{type === 'todays-deal' && <TodaysDealCard productData={data} />}</div>
  )
}

export default Card
