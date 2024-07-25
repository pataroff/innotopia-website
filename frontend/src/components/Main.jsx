import Link from 'next/link'
import Image from 'next/image'

import hexTile from '../../public/hex-tile.png'
import bgAccent from '../../public/main-bg-accent.png'

import { FaArrowRight } from 'react-icons/fa'

// Reacth Three Fiber
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

import { useRef, useState, useEffect } from 'react'

const HexTileModel = () => {
  const hexTileRef = useRef()
  const [scale, setScale] = useState(2)

  const gltf = useLoader(GLTFLoader, '/GroningenHex.gltf')

  // useFrame(({ clock }) => {
  //   // hexTileRef.current.rotation.y = clock.getElapsedTime()
  //   hexTileRef.current.rotation.y += 0.01
  // })

  useEffect(() => {
    const updateScale = () => {
      const isMobile = window.innerWidth < 768
      const newScale = isMobile ? 2.3 : 1.7
      setScale(newScale)
    }

    window.addEventListener('resize', updateScale)
    updateScale() // Call the function initially

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={scale}
        ref={hexTileRef}
        position={[0, -0.25, 0]}
        // Initial Rotation Values - [0.4, -2.3, -0.015]
        rotation={[0.4, -2.3, -0.015]}
      />
    </>
  )
}

const Main = () => {
  return (
    <>
      <section>
        {/* Main Wrapper */}
        <div className='flex justify-center items-center'>
          {/* Wrapper Containers */}
          <div className='flex flex-col-reverse md:flex-row justify-center items-center overflow-x-hidden lg:container'>
            {/* Text Container */}
            <div className='flex flex-col font-poppins gap-y-4 p-24'>
              <h3 className='text-lg font-light'>
                Innovate your company with Innotopia
              </h3>
              <h1 className='text-2xl font-bold'>
                Empowering Digital Transformation and Innovation Acceleration
              </h1>
              <p className='text-md font-normal'>
                Are you a business owner ready to revolutionize your industry
                through the limitless possiblities of creative digital
                solutions?
              </p>
              {/* CTA */}
              <Link href='#contact'>
                <div className='group flex justify-center items-center gap-x-2 mt-4 rounded-xl bg-lime-green w-44 h-11 hover:scale-110 transition-transform duration-100'>
                  <span className='uppercase font-bold text-lg'>
                    Get in touch
                  </span>
                  {/* <FaArrowRight className='hidden group-hover:inline-block' /> */}
                </div>
              </Link>
            </div>
            {/* Hero Container */}
            <div className='relative h-[500px] w-[600px] md:w-[1000px] lg:h-[600px] lg:w-[650px]'>
              <div className='absolute top-24 lg:top-0 md:top-0 inset-0 z-10'>
                <Canvas>
                  <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI * 0.5}
                    maxPolarAngle={Math.PI * 0.9}
                    minAzimuthAngle={-Math.PI * 0.2}
                    maxAzimuthAngle={Math.PI * 0.2}
                  />
                  <ambientLight intensity={2} />
                  <directionalLight position={[0, 0, 5]} />
                  <HexTileModel />
                </Canvas>
              </div>
              {/* <div className='absolute inset-0 z-10 p-14 pr-0 flex justify-end'>
              <Image
                priority
                className='h-full w-full max-w-lg object-scale-down'
                src={hexTile}
                alt='Hex Tile'
              />
            </div> */}
              <div className='absolute right-0 lg:top-10 md:top-5 z-0 p-14 pr-0 lg:w-[450px] lg:h-[550px] md:w-[350px] md:h-[450px] w-[500px] h-[650px]'>
                <Image
                  priority
                  className='h-full w-full'
                  src={bgAccent}
                  alt='Background Image'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Main
