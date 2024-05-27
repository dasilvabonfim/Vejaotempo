''

export default function Tempo({ weatherData }: any) {
    function getLocalTime(dt: any, timezone: any) {
        const utc_seconds = parseInt(dt, 10) + parseInt(timezone, 10);
        const utc_milliseconds = utc_seconds * 1000;
        const local_date = new Date(utc_milliseconds).toLocaleString();
        return local_date;
      }
      
    return (
        <div className="Tempo">
            <h2 className="Titulo">{weatherData.name}, {weatherData.sys?.country} </h2>
            <p className="Titulo">{weatherData.weather?.[0].description}</p>
            <p className="Temperatura">Temperatura Mínima: {((weatherData.main?.temp - 273.15) || 0).toFixed(2)} °C</p>
            <p className="Temperatura">Temperatura Máxima: {((weatherData.main?.temp_max - 273.15) || 0).toFixed(2)} °C</p>
            <p className="Temperatura">Umidade: {weatherData.main?.humidity}%</p>
            <h6>Ultima atualização: {getLocalTime(weatherData.dt, weatherData.timezone)} da região</h6>

        </div>
    );
}