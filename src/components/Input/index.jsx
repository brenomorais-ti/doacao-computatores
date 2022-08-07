
const Input = ({marked, ...props}) => {
  return (
    <div className='wrapper-input'>
      <legend>{props.label}</legend>
      <input
        min={0}
        style={{borderColor: marked ? "red" : "#f0f0f0"}}
        {...props}
      />
    </div>
  )
}

export default Input
