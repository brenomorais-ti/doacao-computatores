import * as C from './styled'
import Input from '../DeviceInput';


const DeviceFields = (props) => {
  return (
    <C.AreaFotm>
      <div className='container'>
        <div className='title'>
          <h3>Deivice information</h3>
        </div>

        <div className='form'>
          <Input name='Equipamento' errors={props.errors} register={props.register} label={props.props} required type="email" placeholder="exemple@exemple.com"/>
          <Input name='Estado' errors={props.errors} register={props.register} label={props.props1} required type="tel" placeholder="(00) 0.0000-0000"/>
        </div>
      </div>
    </C.AreaFotm>
  )
}
  export default DeviceFields