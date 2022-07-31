import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import Input from '../components/Input';

export default function Home() {
  const { 
    register, 
    getValues,
    handleSubmit,
    formState: { errors, isValid } 
  } = useForm({mode: 'all'});

  const onSubmit = data =>{
    data.device = device
    console.log(data)
    console.log(teste)
    alert( 'teste')
  };
  
  const [device, setDevice] = useState([])
  
  function rendlerList(value=0){
    const newDevice = Array.from({length: value}, () => ({type:'', condition:''}))
    setDevice(newDevice)
  }

  function atualizaDevice(value, name, index){
    const newDevice = [...device]
    newDevice[index][name]=value
    setDevice(newDevice)
  }
//criei esse objeto vazio 

  var teste = {}
// fiz essa função para receber o valor e o nome do campo e inserir no objeto
  function setList(value, name){
    teste[name] = value 
  }

  function Form() {
    return (
      <>
        <Input
          label={'Nome'}
          name={'name'}
          type={'text'}
          placeholder={'Tipo do Dispositivo'}
          onChange={({currentTarget:{value, name}}) => setList(value, name)} /*inseri um onChange para 
                                                                                capturar o valor e o nome 
                                                                                do campo e chamar a função q
                                                                                insere os dados no objeto*/
        />
        
        <Input 
          label={'E-mail'} 
          name={'email'} 
          type={'text'}
          placeholder={'example@example.com'} 
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />

        <Input 
          label={'Telefone'} 
          name={'phone'} 
          type={'text'}
          placeholder={'(00) 0000-0000'} 
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />
          
        <Input 
          label={'CEP'} 
          name={'zip'} 
          type={'text'}
          placeholder={'00000-000'} 
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />
        
        <Input 
          label={'Cidade'} 
          name={'city'} 
          type={'text'}
          placeholder={'Cidade'}
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />

        <Input 
          label={'UF'} 
          name={'state'} 
          type={'text'}
          placeholder={'UF'}
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />

        <Input 
          label={'Rua/Av'} 
          name={'streetAddress'} 
          type={'text'}
          placeholder={'Rua/Av'} 
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />

        <Input 
          label={'Nº'} 
          name={'number'} 
          type={'text'}
          placeholder={'Número'} 
          onChange={({currentTarget:{value, name}}) => setList(value, name)}
        />

        <Input 
          label={'Complemento'} 
          name={'comprement'} 
          type={'text'}
          placeholder={'Complemento'} 
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />

        <Input 
          label={'Ponto de referência'} 
          name={'neighborhood'} 
          type={'text'}
          placeholder={'Ponto de referência'} 
          onChange={({currentTarget:{value, name}}) => setList(value, name)} 
        />
        
        <Input
          label={'Quantidade de Dispositivos'}
          name={'device'}
          type={'number'}
          placeholder={'Quantidade de Dispositivos'}
          onChange={
            (e) => rendlerList(e.currentTarget.value)} />
      </>
    )
  }

  return (
    <div>
      <Head>
        <title>Multi part form | React/Next.js</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>Doação de Equipamentos Usados</h1>

        <form onSubmit={onSubmit}>
          <Form /> 
          {
            device.map((_, index) => (
            <>
              <Input
                label={'Equipamento'}
                name={'type'}
                type={'text'}
                placeholder={'Tipo do Dispositivo'}
                onChange={({currentTarget:{value, name}}) => {
                  atualizaDevice(value, name, index)}} />

              <Input
                label={'Estado'}
                name={'condition'}
                type={'text'}
                placeholder={'Condição do Dispositivo'}
                onChange={({currentTarget:{value, name}}) => {
                  atualizaDevice(value, name, index)}} />
            </>))
          }
          <button type="submit">
            SAVE
          </button> 
        </form>
        
      </main>
    </div>
  )
}
