import * as C from './styled'
import Input from '../Input';


const PersonFields = ({register, errors}) =>{
  return(
    <C.AreaFotm>
      <div className='container'>
        <div className='title'>
          <h3>Personal information</h3>
        </div>

        <div className='form'>
          <Input id='input' errors={errors} register={register} label="name" required type="text" placeholder="Ex: Nome Completo"/>
          <Input id='input' errors={errors} register={register} label="email" required type="email" placeholder="Ex: email@email.com"/>
          <Input id='input' errors={errors} register={register} label="phone" required type="tel" placeholder="Ex: (00) 0000-0000"/>
          <Input id='input' errors={errors} register={register} label="zip" required type="text" placeholder="Ex: 55555-000"/>
          <Input id='input' errors={errors} register={register} label="state" required type="text" placeholder="Estado"/>
          <Input id='input' errors={errors} register={register} label="streetAddress" required type="text" placeholder="Rua, Av"/>
          <Input id='input' errors={errors} register={register} label="number" required type="text" placeholder="nº 000"/>
          <Input id='input' errors={errors} register={register} label="complement" required type="text" placeholder="Ex: proximo ao supermercado"/>
          <Input id='input' errors={errors} register={register} label="deviceCount" required type="text" placeholder="Quantidade" />
        </div>
      </div>
    </C.AreaFotm>
  )
}

  export default PersonFields;
  