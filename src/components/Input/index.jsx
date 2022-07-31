const Input = (props) => {
  return (
    <>
      <legend>{props.label}</legend>
      <input
        type={props.type} 
        placeholder={props.placeholder}
        name={props.name} 
        onChange={props.onChange}
        required={props.required} />
    </>
  )
}

export default Input
