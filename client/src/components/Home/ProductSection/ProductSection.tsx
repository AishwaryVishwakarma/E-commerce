import React from 'react'
import styles from './styles.module.scss'
import Card from '../../Commons/Card/Card'
import { nanoid } from 'nanoid'
import { ProductSectionData } from '../../../model'

interface Props {
  sectionData: ProductSectionData[]
}

const ProductSection: React.FC<Props> = ({ sectionData }) => {

  return (
    <section className={styles.PSectionWrapper}>
      <div className={styles.contentContainer}>
        {sectionData.map((data) => (
          <Card key={nanoid()} type={data.type} data={data.cardData} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
