import styles from '../../styles/Home.module.css'

const Input = ({label, required, type, placeholder, register, errors}) => {
  return (
    <div>
      <legend>{label}</legend>
      <input 
        {...register(label, { required })} 
        className={errors[label] && styles.inputInvalid}
        type={type} placeholder={placeholder}
        />
      {errors[label] && <span>mandatory</span>}
    </div>
  )
}

export default Input