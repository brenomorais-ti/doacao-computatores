import styles from '../../styles/Home.module.css'
import Input from '../Input';

const PersonFields = ({register, errors}) =>{
  return(
    <section className={styles.inputGroup}>
      <h3>Personal information</h3>
      <Input errors={errors} register={register} label="name" required type="text" placeholder="Ex: Nome Completo"/>
      <Input errors={errors} register={register} label="email" required type="email" placeholder="Ex: email@email.com"/>
      <Input errors={errors} register={register} label="phone" required type="tel" placeholder="Ex: (00) 0000-0000"/>
      <Input errors={errors} register={register} label="zip" required type="text" placeholder="Ex: 55555-000"/>
      <Input errors={errors} register={register} label="state" required type="text" placeholder="Estado"/>
      <Input errors={errors} register={register} label="streetAddress" required type="text" placeholder="Rua, Av"/>
      <Input errors={errors} register={register} label="number" required type="text" placeholder="nº 000"/>
      <Input errors={errors} register={register} label="complement" required type="text" placeholder="Ex: proximo ao supermercado"/>
      <Input errors={errors} register={register} label="deviceCount" required type="text" placeholder="Quantidade"/>
    </section>
  )
}

  export default PersonFields;