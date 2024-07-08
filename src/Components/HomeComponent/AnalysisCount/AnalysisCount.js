import React from 'react';
import CountUp from 'react-countup';

const AnalysisCount = () => {
  const counters = [
    { number: 20, label: 'Plantation' },
    { number: 500, label: 'Members' },
    { number: 20, label: 'Events' },
    { number: 50, label: 'Pets Rescued' },
  ];

  return (
    <section className="ftco-counter py-20 px-16 bg-gray-800" >
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 flex justify-center counter-wrap py-5"
            >
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number text-4xl font-bold text-green-600">
                    <CountUp end={counter.number} duration={3} />
                  </strong>
                </div>
                <div className="text mt-2">
                  <span className="font-semibold text-gray-200">{counter.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisCount;
