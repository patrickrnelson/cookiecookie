import { useRouter } from 'next/router'
import { useMemo, useState } from 'react';
import { Badge } from "@nextui-org/react";
import { Rating } from 'react-simple-star-rating';
import { useCookies } from '../../context/cookieContext';
import { Cookie } from '../../interfaces';

const tooltipArray = [
  "Terrible",
  "Terrible+",
  "Bad",
  "Bad+",
  "Average",
  "Average+",
  "Great",
  "Great+",
  "Awesome",
  "Incredible",

];
const fillColorArray = [
  "#f17a45",
  "#f17a45",
  "#f19745",
  "#f19745",
  "#f1a545",
  "#f1a545",
  "#f1b345",
  "#f1b345",
  "#f1d045",
  "#f1d045"
];

const Cookie = () => {
  const router = useRouter();
  const { cookies } = useCookies();
  const { id } = router.query;
  
  const cookieToDisplay = useMemo(() => cookies.find((cookie: Cookie) => cookie._id === id), [cookies, id])

  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate)
  };
  
  if(cookieToDisplay) return (
    <div className="flex flex-col relative px-8 md:px-16 lg:px-36 xl:px40">
      <div className="inline-flex flex-col w-100">
        <div className="absolute -top-12 -left-12 md:-top-40">
          <img src={cookieToDisplay.image} alt="Close-up of cookie" className="w-1/2 md:w-1/3"/>
        </div>
      </div>
      <div className="mt-44 md:mt-52">
        <h1 className="text-2xl">{cookieToDisplay.name}</h1>
        <div className="flex gap-3 my-3">
          <Badge enableShadow disableOutline color="primary">
            Tag long
          </Badge>
          <Badge enableShadow disableOutline color="primary">
            Tag
          </Badge>
          <Badge enableShadow disableOutline color="primary">
            Taggy long long
          </Badge>
        </div>
        <p>{cookieToDisplay.description}</p>

        <div className="mt-9">
          {/* <p>Rate this cookie</p> */}
          <div className="w-100">
            <Rating
              SVGclassName="inline-block"
              onClick={handleRating}
              // onPointerEnter={onPointerEnter}
              // onPointerLeave={onPointerLeave}
              // onPointerMove={onPointerMove}
              initialValue={rating}
              size={40}
              transition
              allowFraction
              showTooltip
              tooltipArray={tooltipArray}
              fillColorArray={fillColorArray}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cookie;