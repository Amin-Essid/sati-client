export default function Input({ label, type, mainstyle, name, onChange }) {
  let Label = null;
  if (label) {
    Label = <label htmlFor={name}>{label}</label>;
  }
  return (
    <>
      <div className={mainstyle}>
        {Label}
        <input
          placeholder=""
          name={name}
          type={type}
          id={name}
          onChange={onChange}
        ></input>
      </div>
    </>
  );
}
