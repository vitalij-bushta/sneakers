const Card = () => {
  return (
    <div className="card">
      <img className="card__icon" src="./img/favorite.svg" alt="favorite" />
      <img
        className="card__img"
        src="./img/sneakers/cardImage1.jpg"
        alt="cardImage"
      />
      <p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="card__item">
        <div className="card__price">
          <p>Цена:</p>
          <b>12 999 руб.</b>
        </div>
        <button>
          <img src="./img/plusIcon.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
