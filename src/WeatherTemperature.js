export default function WeatherTemperature(props) {
  return (
    <div className="forecast p-2 container-fluid">
      <span className="unit">{Math.round(props.celsius.current)} °C </span>
    </div>
  );
}
