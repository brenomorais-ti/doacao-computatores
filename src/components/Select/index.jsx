const Select = (props) => {
  return (
    <div className='wrapper-input'>
      <legend>{props.label}</legend>
      <select
        type={props.type} 
        name={props.name} 
        onChange={props.onChange}
        required={props.required}>
    
        <option value=""> - Selecione - </option>
        {props.items.map((item, index) => (
          <option value={item.value} >
            {item.name}
          </option>))}
      </select>
    </div>
  )
}

export default Select
  