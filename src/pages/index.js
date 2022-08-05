import Head from 'next/head'
import { useState } from 'react'
import Input from '../components/Input'
import Select from '../components/Select'
import axios from 'axios'




export default function Home() {

  const onSubmit = () => {
   const payload = {...form, devices: [...device]}

   axios.post('https://doar-computadores-test.herokuapp.com/donation', payload)
   .then(response => {
     alert(JSON.stringify(response.data))
     console.log(response.data)
   })
   .catch((error) => {
    console.log(error)
    if(error.response.status == 400)
      alert(error.response.data.errorMessage)
    if(error.response.status == (500 || 501))
      alert('O servidor falhou em responder. Tente mais tarde.')
  })
      alert(JSON.stringify(device))
  }
  
//opcoes de equipamentos
  const typeDevice = [
    {name: 'Notebook', value:'notebook'},
    {name: 'Desktop', value:'desktop'},
    {name: 'Netbook', value:'netbook'},
    {name: 'Monitor', value:'screen'},
    {name: 'Impressora', value:'printer'},
    {name: 'Scanner', value:'scanner'}
  ]
//opcoes de estado de uso dos equipamentos  
  const conditionDevice =[
    {name: 'Tem todas as partes, liga e funciona normalmente', value: 'working'},
    {name: 'Tem todas as partes, mas não liga mais', value: 'notWorking'},
    {name:'Faltam peças, funciona só as vezes ou está quebrado', value: 'broken'}
  ]

  //Formulario inicial
    //insere os elementos no objeto form
  const [form, setForm] = useState  ({
    name: "",
    email: "",
    phone: "",
    zip: "",
    city: "",
    state: "",
    streetAddress: "",
    number: "",
    complement: "",
    neighborhood: "",
    deviceCount: "",
  })

  function setList (value, name){
    const newForm = {...form}
    newForm[name]=value
    setForm(newForm)
  }

  //cria os novos compos dinamocos e insere as opcoes escolhidas em um array de objetos
  const [device, setDevice] = useState([])
  
  function rendlerList(value=0){
    const newDevice = Array.from({length: value}, () => ({type:'', condition:''}))
    setDevice(newDevice)
  }

  function deviceUpdate(value, name, index){
    const newDevice = [...device]
    newDevice[index][name]=value
    setDevice(newDevice)
  }

  //CEP 
  const checkCEP = (e) => {
    const cep = e.currentTarget.value.replace(/\D/g, '')
    if(!cep.length)return
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        const response = {
          ...form,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
          streetAddress: data.logradouro,
        }
        setForm(response)
      })
      .catch(() => alert("CEP invalido"))
}

  return (
    <main>
      <Head>
        <title>Amigo do Bem</title>
       {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>*/}
        <meta name="description" content="Doaçao de computadores" />
      </Head>
      
        <h2>Doação de Equipamentos Usados</h2>
        <section>
          <h3>Dados Pessoais</h3>
          <form class="form">
            <div className="row">
              <Input
                required
                label={'Nome'}
                name={'name'} 
                type={'text'}
                placeholder={'Nome completo'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
             
              <Input 
                label={'E-mail'} 
                name={'email'} 
                type={'email'}
                placeholder={'example@example.com'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            </div>

            <div className="row">
              <Input
                required
                label={'Telefone'} 
                name={'phone'} 
                type={'text'}
                placeholder={'(00) 0000-0000'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            
              <Input
                required
                label={'CEP'} 
                name={'zip'} 
                type={'text'}
                placeholder={'00000-000'}
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}}
                onBlur={checkCEP} />
            </div>

            <div className="row">
              <Input 
                required
                value={form.city}
                label={'Cidade'} 
                name={'city'} 
                type={'text'}
                placeholder={'Cidade'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            
              <Input
                required
                size={2} 
                value={form.state}
                label={'UF'} 
                name={'state'} 
                type={'text'}
                placeholder={'UF'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            </div>

            <div className="row">
              <Input 
                required
                value={form.streetAddress}
                label={'Endereço'} 
                name={'streetAddress'} 
                type={'text'}
                placeholder={'Rua/Av'}
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
           
              <Input
                required
                size={5} 
                label={'Nº'} 
                name={'number'}
                type={'text'}
                placeholder={'Número'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            </div>

            <div className="row">
              <Input
                required
                label={'Complemento'} 
                name={'complement'}
                type={'text'}
                placeholder={'Número'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            
              <Input
                required
                value={form.neighborhood}
                label={'Bairro'} 
                name={'neighborhood'} 
                type={'text'}
                placeholder={'Ponto de referência'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            </div>
            
            <h3>Dados Pessoais</h3>
            <Input
                required
                size={3} 
                label={'Quantidade de Dispositivos'}
                name={'deviceCount'}
                type={'number'}
                placeholder={'Quantidade de Dispositivos'}
                onInput={({currentTarget:{value, name}}) => {
                  setList(value, name)}}
                onChange={
                  (e) => rendlerList(e.currentTarget.value)} />
              {
                device.map((_, index) => (
                <div className="row">
                  <h1>Especificações dos Equipamentos</h1>
                  <Select 
                    required
                    label={'Equipamento'} 
                    name={'type'} 
                    type={'text'}
                    items={typeDevice}
                    onChange={({currentTarget:{value, name}}) => {
                      deviceUpdate(value, name, index)}}/>

                  <Select
                    required
                    label={'Estado'} 
                    name={'condition'} 
                    type={'text'}
                    items={conditionDevice}
                    onChange={({currentTarget:{value, name}}) => {
                      deviceUpdate(value, name, index)}}/>
                </div>))
              }
            <button className='button' onClick={onSubmit}>
              SALVAR
            </button> 
          </form>
        </section>
      </main>
  )
}
