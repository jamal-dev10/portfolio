import { useState, useEffect } from 'react'

export default function useCasablancaTime() {
  const [time, setTime] = useState('')
  const [greeting, setGreeting] = useState('')
  const [isWorkingHour, setIsWorkingHour] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Casablanca',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now)

        const hourStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Casablanca',
          hour: 'numeric',
          hour12: false
        }).format(now)

        const currentHour = parseInt(hourStr, 10)
        setTime(timeStr)

        if (currentHour >= 5 && currentHour < 12) {
          setGreeting('Good morning')
        } else if (currentHour >= 12 && currentHour < 18) {
          setGreeting('Good afternoon')
        } else {
          setGreeting('Good evening')
        }

        setIsWorkingHour(currentHour >= 9 && currentHour < 21)
      } catch (e) {
        setTime(new Date().toLocaleTimeString())
        setGreeting('Hello')
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return { time, greeting, isWorkingHour }
}
