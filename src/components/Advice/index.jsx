export default function Advice(props) {
  return (
    <div className="advice">
      <small>advice #{props.id.toString().padStart(3, "0")}</small>
      <h2>{props.text}</h2>
      <button className="randomizer" />
    </div>
  );
}
