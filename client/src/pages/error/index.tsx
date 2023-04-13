import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from './styles.module.scss'

const ErrorPage: React.FC = () => {
  const naviagte = useNavigate()
  const [timer, setTimer] = useState(10000)

  const decrementTimer = useCallback(() => {
    setTimer((oldTimer) => oldTimer - 1)
  }, [])

  useEffect(() => {
    if (timer <= 0) {
      naviagte('/')
      return
    }
    const timeoutFunction = setInterval(decrementTimer, 1000)

    return () => clearInterval(timeoutFunction)
  }, [decrementTimer, timer])

  return (
    <Layout>
      <div className={styles.errorWrapper}>
        <img src='https://i.postimg.cc/bvmrDR9X/error-page.png'/>
        <div className={styles.textContainer}>
          <div className={styles.textHeading}>
            Oh no! The page doesn't exist.
          </div>
          <div className={styles.subtext}>
            Redirecting to <Link to='/'>homepage</Link> in {timer} seconds
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorPage
