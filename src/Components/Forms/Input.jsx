
export default function Input({className = '', ...props}) {
  return (
    <div>
        <input
        className={` ` + className} 
        {...props} />
    </div>
  )
}
