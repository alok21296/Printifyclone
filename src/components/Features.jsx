import React from 'react'

const Features = () => {
  return (
    <div className="feature flex">
      <div className="features-wrapper flex  justify-center">
        <div className="feature__item text-center p-4">
          <img
            width="120"
            height="120"
            src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
            alt="Higher Profits"
            className="feature__icon"
            loading="lazy"
            fetchpriority="auto"
          />
          <h4 className="feature__name font-bold">Higher Profits</h4>
          <p className="feature__description">
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>
        <div className="feature__item text-center p-4">
          <img
            width="120"
            height="120"
            src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
            alt="Robust Scaling"
            className="feature__icon"
            loading="lazy"
            fetchpriority="auto"
          />
          <h4 className="feature__name font-bold">Robust Scaling</h4>
          <p className="feature__description">
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
        <div className="feature__item text-center p-4">
          <img
            width="120"
            height="120"
            src="https://printify.com/pfh/assets/legacy/best-selection.svg"
            alt="Best Selection"
            className="feature__icon"
            loading="lazy"
            fetchpriority="auto"
          />
          <h4 className="feature__name font-bold">Best Selection</h4>
          <p className="feature__description">
            With 900+ products and top quality brands, you can choose the
            best products for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
