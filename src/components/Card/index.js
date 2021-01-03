import './index.css';

const Card = ({ qData }) => {
  return (
    <div className="card">
      <h1 className="name">{qData.author}</h1>
      <q className="quote">{qData.quote}</q>
      <span className="serie">{qData.series}</span>
    </div>
  );
};

export default Card;
