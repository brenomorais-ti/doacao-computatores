import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import Input from '../components/Input/index'
import Navigation from '../components/Navigation/index';
import PersonFields from '../components/PersonFields';
import DeviceFields from '../components/DeviceFields';

export default function Home() {

  const { 
    register, 
    getValues,
    handleSubmit,
    formState: { errors, isValid } 
  } = useForm({mode: 'all'});

  const [qtdDevice, setQtdDevice] = useState('')

  const onSubmit = data => console.log(data);

  const [step, setStep] = useState(0)

  function teste () {
    return(
      
      <DeviceFields errors={errors} register={register}/>
    )
  }

  function PutANumber() {
    return (
    <div>
      <form>
      <DeviceFields errors={errors} register={register}/>
      </form>
    </div>
    )
  }


  return (
    <div>
      <Head>
        <title>Multi part form | React/Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
          <h1>User Register</h1>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <PersonFields errors={errors} register={register}/>

          </form>
           
          <button 
            type="button" 
            className={styles.nextButton} 
            disabled={!isValid} 
            onClick={()=>{ teste(getValues('deviceCount'))}}
            >
            NEXT
            </button>  


    <div>
      {Array.from({length: getValues('deviceCount')}).map((_, index) => (
        <PutANumber key={index} />
      ))}
    </div>

      </main>
      
    </div>
  )
}