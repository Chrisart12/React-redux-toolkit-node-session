
export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            type="checkbox"
            className={`form-check-input ` + className}
            {...props}
        />
    );
}
