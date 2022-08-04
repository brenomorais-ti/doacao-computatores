const Input = (props) => {
  return (
    <>
      <legend>{props.label}</legend>
      <input
        min={0}
        size={props.size} 
        value={props.value}
        type={props.type} 
        placeholder={props.placeholder}
        name={props.name} 
        onChange={props.onChange}
        onInput={props.onInput}
        onBlur={props.onBlur}
        required={props.required} />
    </>
  )
}

export default Input
