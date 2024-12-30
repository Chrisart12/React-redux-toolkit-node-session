
export default function Select({ className = '', defaultValue, items, label, ...props  }) {
    return (
        // <input
        //     type="checkbox"
        //     className={`form-check-input ` + className}
        //     {...props}
        // />
        <select className={className} {...props} >
            <option defaultValue={defaultValue} >{ label }</option>
            { items }
        </select>
    );
}