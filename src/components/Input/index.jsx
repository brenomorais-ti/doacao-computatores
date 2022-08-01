const Input = (props) => {
  return (
    <>
      <legend>{props.label}</legend>
      <input
        min={0}
        value={props.value}
        type={props.type} 
        placeholder={props.placeholder}
        name={props.name} 
        onChange={props.onChange}
        onBlur={props.onBlur}
        required={props.required} />
    </>
  )
}

export default Input
