const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
            alt={item.title || item.name}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{item.title || item.name}</p>
            <p className="title is-6">
              {item.release_date || item.first_air_date}
            </p>
          </div>
        </div>
        <div className="content">
          {item.overview.slice(0, 120).concat("...")}
        </div>
      </div>
    </div>
  );
};

export default Card;
