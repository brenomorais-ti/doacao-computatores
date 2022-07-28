import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import Input from '../components/Input'
import Navigation from '../components/Navigation/navigation';

export default function Home() {

  const { 
    register, 
    handleSubmit,
    formState: { errors, isValid } 
  } = useForm({mode: 'all'});

  const onSubmit = data => console.log(data);

  /** Mark the input group already filled as blue or gray if not */
  const Reference = () =>(
    <footer className={styles.reference}>
      {renderMarkers()}
    </footer>
  )
  function renderMarkers(){
    let markers = []
    for(let i=0; i<fieldGroups.length; i++)
      markers.push(<span className={step >= i ? styles.markerBlue : styles.markerGray} />)
    return markers
  }

  const [step, setStep] = useState(0)

  const fieldGroups =[
  <PersonFields/>,
  <ContactFields/>,
  <AddressFields/>
  ]

  return (
    <div>
      <Head>
        <title>Multi part form | React/Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
          <h1>User Register</h1>
          
      </main>
      
    </div>
  )
}