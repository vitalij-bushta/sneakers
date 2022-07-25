const Drawer =()=>{
    return(
        <div style={{display: 'none'}} className="owerlay">
        <div className="drawer">
          <h2>
            Корзина{" "}
            <img
              className="cartIcon__btn"
              src="./img/remove-btn.svg"
              alt="Remove"
            />
          </h2>
          <div class="items">
            <div className="cartIcon">
              <img
                className="cartIcon__img"
                src="./img/sneakers/cardImage1.jpg"
                alt="Sneakers"
              />
              <div className="cartIcon__info">
                <p className="cartIcon__name">
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b className="cartIcon__price">12 999 руб.</b>
              </div>
              <img
                className="cartIcon__btn"
                src="./img/remove-btn.svg"
                alt="Remove"
              />
            </div>

            <div className="cartIcon">
              <img
                className="cartIcon__img"
                src="./img/sneakers/cardImage1.jpg"
                alt="Sneakers"
              />
              <div className="cartIcon__info">
                <p className="cartIcon__name">
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b className="cartIcon__price">12 999 руб.</b>
              </div>
              <img
                className="cartIcon__btn"
                src="./img/remove-btn.svg"
                alt="Remove"
              />
            </div>

            <div className="cartIcon">
              <img
                className="cartIcon__img"
                src="./img/sneakers/cardImage1.jpg"
                alt="Sneakers"
              />
              <div className="cartIcon__info">
                <p className="cartIcon__name">
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b className="cartIcon__price">12 999 руб.</b>
              </div>
              <img
                className="cartIcon__btn"
                src="./img/remove-btn.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="total">
            <ul>
              <li className="total__item">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className="total__item">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="./img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    )
};

export default Drawer;