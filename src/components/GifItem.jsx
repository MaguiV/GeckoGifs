import PropTypes from "prop-types";

export const GifItem = ({ title, url, date, rating }) => {
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        <div className="card__inner">
          <p classname="">
            Date: {date} <br />
            Rating: {rating}
          </p>
        </div>
      </div>
    </>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};