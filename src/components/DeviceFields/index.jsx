import styles from '../../styles/Home.module.css'
import Input from '../Input';

const DeviceFields = (props) => {
  
    return (
    <section className={styles.inputGroup}>
      <h3>Especificações</h3>
      <Input errors={props.errors} register={props.register} label={props.props} required type="email" placeholder="exemple@exemple.com"/>
      <Input errors={props.errors} register={props.register} label={props.props1} required type="tel" placeholder="(00) 0.0000-0000"/>
    </section>
  )
}
  export default DeviceFields