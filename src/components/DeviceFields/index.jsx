import styles from '../../styles/Home.module.css'
import Input from '../Input';

const DeviceFields = ({register, errors}) => {
    return (
    <section className={styles.inputGroup}>
      <h3>Especificações</h3>
      <Input errors={errors} register={register} label="Email" required type="email" placeholder="exemple@exemple.com"/>
      <Input errors={errors} register={register} label="Phone" required type="tel" placeholder="(00) 0.0000-0000"/>
    </section>
  )
}
  export default DeviceFields;