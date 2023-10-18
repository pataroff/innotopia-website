import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const PageScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    if (window.scrollY > 560) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className='fixed bottom-7 right-7 cursor-pointer rounded-full drop-shadow-lg w-9 h-9 bg-white flex justify-center items-center p-2 hover:scale-110 transition-transform duration-500'
      onClick={scrollToTop}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    >
      <FontAwesomeIcon icon={faChevronUp} width={40} height={40} />
    </div>
  )
}

export default PageScrollTop
