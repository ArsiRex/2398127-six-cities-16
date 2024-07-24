import { useState } from 'react';
import { Offer } from '../../types/offer.ts';

type OfferCardProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferCardProps): JSX.Element {
  const [activeCard, setActiveCard] = useState({});
  const bookmarkButtonClass = offer.isFavorite ?
    'place-card__bookmark-button button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';
  return(
    <article className="cities__card place-card" id={`offer-${offer.id}`}
      onMouseOver={() => {
        setActiveCard({
          ...activeCard,
          id: offer.id,
        });
      }}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: '80%',
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
