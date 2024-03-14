const CountrySpec = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  return (
    <div>
      <p>
        <small>Country Data: {country.name.common}</small>
      </p>
    </div>
  );
};

export default CountrySpec;
