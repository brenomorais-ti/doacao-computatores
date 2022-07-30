import styles from '../../styles/Home.module.css'

const Input = ({name, label, required, type, placeholder, register, errors}) => {
    var teste= []
    return (
      <div>
        <legend>{name}</legend>
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