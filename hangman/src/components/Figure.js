import React from "react";
import hang0 from "../assets/hang-0.png";
import hang1 from "../assets/hang-1.png";
import hang2 from "../assets/hang-2.png";
import hang3 from "../assets/hang-3.png";
import hang4 from "../assets/hang-4.png";
import hang5 from "../assets/hang-5.png";
import hang6 from "../assets/hang-6.png";

const Figure = ({ wrongGuesses }) => {
  const errors = wrongGuesses.length;

  return (
    <div className="deadmanlmao">
      {/* <!-- Rod --> */}
      {errors === 0 && <img src={hang0} alt="hang0" />}

      {/* <!-- Head --> */}
      {errors === 1 && <img src={hang1} alt="hang1" />}
      {/* <!-- Body --> */}
      {errors === 2 && <img src={hang2} alt="hang2" />}
      {/* <!-- Arms --> */}
      {errors === 3 && <img src={hang3} alt="hang3" />}
      {errors === 4 && <img src={hang4} alt="hang4" />}
      {/* <!-- Legs --> */}
      {errors === 5 && <img src={hang5} alt="hang5" />}
      {errors === 6 && <img src={hang6} alt="hang6" />}
    </div>
  );
};

export default Figure;
