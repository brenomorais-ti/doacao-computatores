const Select = ({items, ...props}) => {
  return (
    <div className='wrapper-input'>
      <legend>{props.label}</legend>
      <select
        {...props}>
    
        <option value=""> - Selecione - </option>
        {items.map((item, index) => (
          <option value={item.value} >
            {item.name}
          </option>))}
      </select>
    </div>
  )
}

export default Select
  