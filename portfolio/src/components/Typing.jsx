import { useEffect, useState } from 'react'
export default function Typing({ words = [], speed = 300, pause = 1500 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length] || ''
    let timeout = speed
    if (!deleting && subIndex === current.length) {
      timeout = pause
      setDeleting(true)
    } else if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      timeout = 300
      
    }
    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, timeout)
    return () => clearTimeout(t)
  }, [words, index, subIndex, deleting, speed, pause])

  return <span>{(words[index % words.length] || '').substring(0, subIndex)}<span className="border-r-2 border-primary ml-0.5 animate-pulse" /></span>
}
