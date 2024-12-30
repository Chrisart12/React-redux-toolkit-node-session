export default function InputLabel({ htmlFor = '', className, label = '' }) {
    return (
        <label htmlFor={htmlFor} className={`fw-bold ` + className}>
            {label}
        </label>
    );
}
