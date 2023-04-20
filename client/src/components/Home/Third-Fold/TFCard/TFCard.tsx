import React from 'react'
import { type TFDummyData } from './../../../../model'

interface Data {
  data: TFDummyData
}

const TFCard: React.FC<Data> = ({ data }) => {
  return <div>TFCard</div>
}

export default TFCard
