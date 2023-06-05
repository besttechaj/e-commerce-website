import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <>
            <span
              key={i}
              //sending value of i to our rate state present inside  Filter Component using onClick
              onClick={() => {
                onClick(i);
                console.log(i);
              }}
              style={style}
            >
              {rating > i ? (
                <AiFillStar fontSize='15px' />
              ) : (
                <AiOutlineStar fontSize='15px' />
              )}
            </span>
          </>
        );
      })}
    </>
  );
};

export default Rating;
