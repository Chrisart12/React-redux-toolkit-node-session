
export default function InputRange({className = '', ...props}) {
  return (
    <div>
        <input
            className={` ` + className} 
            {...props} 
        />
    </div>
  )
}
