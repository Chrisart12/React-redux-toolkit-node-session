<div class="mb-3">
  <textarea class="form-control"  rows="3"></textarea>
</div>


export default function Textarea ({className = '', ...props}) {
    return (
      <div className="mb-3">
            <textarea
                className={` ` + className} 
                {...props} 
            >
            </textarea>
      </div>
    )
  }
  