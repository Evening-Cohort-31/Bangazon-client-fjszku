import { useRouter } from 'next/router'
import { rateProduct } from '../../data/products'
import { RatingsContainer } from './container'
import { Header } from './header'

// Changed the logic behind productID to get the productID from useRouter instead of the rating itself

export function Ratings({ average_rating, refresh, ratings = [], number_purchased, likes = [] }) {
  const router = useRouter()
  const productId = router.query.id
  const saveRating = (newRating) => {
    rateProduct(productId, newRating).then(refresh)

  }

  return (
    <div className="tile is-ancestor is-flex-wrap-wrap">
      <Header 
        averageRating={average_rating}
        ratingsLen={ratings.length}
        numberPurchased={number_purchased}
        likesLength={likes.length}
      />
      <RatingsContainer ratings={ratings} saveRating={saveRating} />
    </div>
  )
}
