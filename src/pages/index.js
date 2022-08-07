import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Input from '../components/Input'
import Select from '../components/Select'
import axios from 'axios'
import menu from '../styles/Menu.module.css'
import button from '../styles/Button.module.css'


export default function Home() {
 //onde a magica acontece rsrsr
  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = {...form, devices: [...device]} //junção do form com o devices
    for (const campo in payload){
      if(payload[campo] === ""){
        delete payload[campo]
      }
    }
    try {
      const response = await axios.post('https://doar-computadores-rafael.herokuapp.com/donation', payload)
      await swal ( "Ok" ,  "Enviado com sucesso!!!" ,  "success" )
      window.location.reload()
    } catch (error) { 
        console.log(error)
        if(error.response.status == 400)
          if(Array.isArray(error.response.data.requiredFields)){
           const newRequiredFields = {...requiredFields}
           const response = error.response.data.requiredFields
           for (let field of response){ // marca todos os campos obrigatorios vazios
              newRequiredFields[field] = true
           }
           for (let field in newRequiredFields){ //desmarca todos os campos preenchidos
            if (!response.includes(field)){
              newRequiredFields[field] = false
            }
          }
          setRequiredFilds(newRequiredFields)
          swal ( "Preencha todos os campos!" , error.response.data.requiredFields.join(', '),  "error" )
          } else {
            swal ( "Ops" , error.response.data.errorMessage,  "error" )
          }
          if(error.response.status == (500 || 501))
            swal ("Ops", "O servidor falhou em responder. Tente mais tarde.",  "error" )
      }
  }

//equipamentos
  const typeDevice = [
    {name: 'Notebook', value:'notebook'},
    {name: 'Desktop', value:'desktop'},
    {name: 'Netbook', value:'netbook'},
    {name: 'Monitor', value:'screen'},
    {name: 'Impressora', value:'printer'},
    {name: 'Scanner', value:'scanner'}
  ]

//opcoes de estado de uso  
  const conditionDevice =[
    {name: 'Tem todas as partes, liga e funciona normalmente', value: 'working'},
    {name: 'Tem todas as partes, mas não liga mais', value: 'notWorking'},
    {name:'Faltam peças, funciona só as vezes ou está quebrado', value: 'broken'}
  ]

  //Form
  const [form, setForm] = useState  ({
    name: "",
    phone: "",
    zip: "",
    city: "",
    state: "",
    streetAddress: "",
    number: "",
    neighborhood: "",
    deviceCount: "",
  })
 
  //insere os elementos no objeto form
  //Verifica se o value é vazio, se for o campo não é inserido no objeto
  //a verificação é somente para os campos email e complemento
  function setList (value, name){
    const newForm = {...form}
      newForm[name]=value
      setForm(newForm)
  }

  //Device
  const [device, setDevice] = useState([])
  //array de devices
  function rendlerList(value=0){
    const newDevice = Array.from({length: value}, () => ({type:'', condition:''}))
    setDevice(newDevice)
  }
  //inselre os valores nos devices
  function deviceUpdate(value, name, index){
    const newDevice = [...device]
    newDevice[index][name]=value
    setDevice(newDevice)
  }

  //consulta cep e insere os dados no form 
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
//para controle dos campos obrigatorios
const [requiredFields, setRequiredFilds] = useState({
  name: false,
  phone: false,
  zip: false,
  city: false,
  state: false,
  streetAddress: false,
  number: false,
  neighborhood: false,
  deviceCount: false
})

  return (
    <main>
      <Head>
        <title>Doação Digital</title>
        <meta name="description" content="Doaçao de computadores" />
        <link rel="icon" type="png" href="/imagens/icon.png" />
        <link rel="icon" href="/images/icon.png" ></link>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      </Head>

        <div className='image-logo'>
          <img src="/images/logo.png"/>
        </div>
       
        <nav className={menu.menu}>
          <ul>
            <li>
              <Link href="/">
                <a>DOAÇÃO</a>
              </Link>
            </li>
            <li>
              <Link href="/instituicoes">
                <a>PARCEIROS</a>
              </Link>
            </li>
          </ul>
        </nav>

        <section>
          <h3>Dados Pessoais</h3>
          <form className="form" onSubmit={onSubmit}>
            <div className="row">
              <Input
                marked={requiredFields.name}
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
                marked={requiredFields.phone}
                label={'Telefone'} 
                name={'phone'} 
                type={'text'}
                placeholder={'(00) 0000-0000'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            
              <Input
                marked={requiredFields.zip}
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
                marked={requiredFields.city}
                value={form.city}
                label={'Cidade'} 
                name={'city'} 
                type={'text'}
                placeholder={'Cidade'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            
              <Input
                marked={requiredFields.state}
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
                marked={requiredFields.streetAddress}
                value={form.streetAddress}
                label={'Endereço'} 
                name={'streetAddress'} 
                type={'text'}
                placeholder={'Rua/Av'}
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
           
              <Input
                marked={requiredFields.number}
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
                label={'Complemento'} 
                name={'complement'}
                type={'text'}
                placeholder={'Número'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            
              <Input
                marked={requiredFields.neighborhood}
                value={form.neighborhood}
                label={'Bairro'} 
                name={'neighborhood'} 
                type={'text'}
                placeholder={'Ponto de referência'} 
                onChange={({currentTarget:{value, name}}) => {
                  setList(value, name)}} />
            </div>
            
            <h3>Dispositivo(s)</h3>
            <div className="row">
              <Input
                  marked={requiredFields.deviceCount}
                  size={3} 
                  label={'Quantidade'}
                  name={'deviceCount'}
                  type={'number'}
                  placeholder={'Quantidade de Dispositivos'}
                  onInput={({currentTarget:{value, name}}) => {
                    setList(value, name)}}
                  onChange={
                    (e) => rendlerList(e.currentTarget.value)} />
            </div>
              {
                device.map((_, index) => (
                  <div>
                    <h4>Dispositivo</h4>
            
                    <Select 
                      label={'Tipo'} 
                      name={'type'} 
                      type={'text'}
                      items={typeDevice}
                      onChange={({currentTarget:{value, name}}) => {
                        deviceUpdate(value, name, index)}}/>
              
                    <Select
                      label={'Estado'} 
                      name={'condition'} 
                      type={'text'}
                      items={conditionDevice}
                      onChange={({currentTarget:{value, name}}) => {
                        deviceUpdate(value, name, index)}}/>
                  </div>)
                )
              } 
            <input className={button.button} type="submit"
              value="enviar"
            />
          </form>
          
        </section>

        <div className='image'>
          <a href="https://www.appmasters.io/en"><img src="/images/appmasters.png"/></a>
        </div>
    </main>
  )
}
