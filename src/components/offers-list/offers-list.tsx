import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers';

type OffersListProps = {
  offers: Offer[];
}

function OffersList ({offers}: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default OffersList;