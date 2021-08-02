export default function Select({
  label,
  setValue,
  options,
  mainstyle,
  secondStyle,
  name,
}) {
  let Label = null;
  if (label) {
    Label = (
      <label className={secondStyle} htmlFor={name}>
        {label}
      </label>
    );
  }
  return (
    <>
      <div className={mainstyle}>
        {Label}
        <select
          style={{ marginTop: "15px" }}
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
          defaultValue=""
          name={name}
          id={name}
        >
          {options.map((op, i) => (
            <option key={i} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
