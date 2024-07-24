import { Offer } from '../../types/offer.ts';
import OfferCard from './offer-card.tsx';
import OfferCardFavorite from './offer-card-favorite.tsx';

type OfferCardsProps = {
  offers: Offer[];
  onClick: (id: string) => void;
  isFavorites: boolean;
}

function OfferCards({offers, onClick, isFavorites}: OfferCardsProps): JSX.Element {
  if (isFavorites) {
    return (
      <div className="favorites__places">
        {offers.map((offer) => offer.isFavorite ? <OfferCardFavorite key={offer.id} offer={offer} onClick={onClick}/> : '')}
      </div>
    );
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onClick={onClick}/>)}
    </div>
  );
}

export default OfferCards;
