import Link from 'next/link'
import Image from 'next/image'

import hexTile from '../../public/hex-tile.png'
import bgAccent from '../../public/main-bg-accent.png'

import { FaArrowRight } from 'react-icons/fa'

// Reacth Three Fiber
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

import { useRef, useState } from 'react'

const HexTileModel = () => {
  const hexTileRef = useRef()
  const [active, setActive] = useState(false)

  const gltf = useLoader(GLTFLoader, '/GroningenHex.gltf')

  // useFrame(({ clock }) => {
  //   // hexTileRef.current.rotation.y = clock.getElapsedTime()
  //   hexTileRef.current.rotation.y += 0.01
  // })

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={1.7}
        ref={hexTileRef}
        // Initial Rotation Values - [0.3, -2.2, -0.015]
        rotation={[0.3, -2.2, -0.015]}
      />
    </>
  )
}

const Main = () => {
  return (
    <>
      <section>
        {/* Main Wrapper */}
        <div className='flex flex-col-reverse md:flex-row justify-center items-center overflow-x-hidden'>
          {/* Text Container */}
          <div className='flex flex-col font-poppins gap-y-4 p-24 lg:ml-14'>
            <h3 className='text-sm font-semilight'>
              Innovate your company with Innotopia
            </h3>
            <h1 className='text-2xl font-bold'>
              Empowering Digital Transformation and Innovation Acceleration
            </h1>
            <p className='text-sm font-medium'>
              Are you a business owner ready to revolutionize your industry
              through the limitless possiblities of creative digital solutions?
            </p>
            {/* CTA */}
            <Link href='#contact'>
              <div className='group flex justify-center items-center gap-x-2 mt-4 rounded-xl bg-lime-green w-40 h-10 '>
                <span className='uppercase font-bold'>Get in touch</span>
                <FaArrowRight className='hidden group-hover:inline-block' />
              </div>
            </Link>
          </div>
          {/* Hero Container */}
          <div className='relative container h-[600px] w-[600px]'>
            <div className='absolute inset-0 z-10 p-14 pr-0 flex justify-end'>
              <Canvas>
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  minPolarAngle={Math.PI * 0.3}
                  maxPolarAngle={Math.PI * 0.4}
                />
                <ambientLight intensity={2.5} />
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
            <div className='absolute inset-0 z-0 p-14 pr-0 flex justify-end'>
              <Image
                priority
                className='h-full w-full max-w-lg object-scale-down object-right'
                src={bgAccent}
                alt='Background Image'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Main
