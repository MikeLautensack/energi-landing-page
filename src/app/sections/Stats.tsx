import React from "react";

const Stats = () => {
  return (
    <section
      id="stats-section"
      className="px-3 md:px-8 lg:px-[120px] flex flex-col gap-6 bg-stats-bg bg-no-repeat bg-cover"
    >
      <div
        id="value"
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 py-16"
      >
        <div className="flex flex-col gap-4 col-span-4 md:col-span-5 lg:col-span-7">
          <h5 className="text-[22px] leading-[26px] text-[#717171]">
            OUR FUNDAMENTAL VALUE
          </h5>
          <h2 className="text-[37px] leading-[45px] md:text-[54px] md:leading-[65px] text-[#FFFFFF]">
            The safest way to build value.
          </h2>
          <div className="flex flex-col gap-[22px]">
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              Energi was ingeniously designed with an attractive Masternode
              incentive model and strong Treasury.
            </p>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              Energi’s novel Treasury is larger than any other, is truly
              decentralized, and its complementary Masternode network votes on
              how the funds are invested.
            </p>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
              This enables Energi to invest in future-proof innovation,
              high-return marketing activities, and impactful campaigns that
              expand awareness and adoption of its ecosystem, which adds to its
              Treasury – creating a virtual cycle of growth.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start col-span-4 md:col-span-3 lg:col-start-9 lg:col-end-13">
          <div className="flex flex-col gap-2">
            <h3 className="text-[45px] leading-[54px] lg:text-[85px] lg:leading-[103px] text-[#FFFFFF] text-center">
              95%+
            </h3>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center">
              Customer Satisfaction Rating
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[45px] leading-[54px] lg:text-[85px] lg:leading-[103px] text-[#FFFFFF] text-center">
              24/7
            </h3>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center">
              User Protection and Customer Support
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[45px] leading-[54px] lg:text-[85px] lg:leading-[103px] text-[#FFFFFF] text-center">
              $1.1m+
            </h3>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center">
              of assets had been restored by our blockchain protections since we
              launched
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[45px] leading-[54px] lg:text-[85px] lg:leading-[103px] text-[#FFFFFF] text-center">
              16.8m
            </h3>
            <p className="text-[18px] leading-[22px] text-[#FFFFFF] text-center">
              of Transactions in our blockchain
            </p>
          </div>
        </div>
      </div>
      <div
        id="impact"
        className="py-16 lg:py-[120px] w-full flex justify-center"
      >
        <div
          id="wrapper"
          className="flex w-full lg:max-w-[1092px] justify-center items-center lg:justify-end"
        >
          <div
            id="inner-wrapper"
            className="flex flex-col gap-6 lg:gap-8 items-center md:items-start justify-start md:justify-center w-full md:max-w-[506px] lg:max-w-[792px]"
          >
            <div className="flex flex-col gap-4 items-start justify-start">
              <h5 className="text-[22px] leading-[26px] text-[#717171]">
                WE EXIST TO EDUCATE, ACT AND INSPIRE
              </h5>
              <h2 className="text-[37px] leading-[45px] md:text-[45px] md:leading-[65px] text-[#FFFFFF]">
                Energi Impact
              </h2>
              <div className="flex flex-col gap-[22px]">
                <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
                  Energi Impact is the world’s first self-funding cryptocurrency
                  impact project. We exist to educate, inspire and act for
                  positive change in our society and environment.
                </p>
                <p className="text-[18px] leading-[22px] text-[#FFFFFF]">
                  Our education platform is a holistic healing tool, for your
                  mind, body and soul. To take that further, we continue to
                  inspire on how we can work together to heal our planet.
                </p>
              </div>
            </div>
            <button className="w-full h-[70px] border border-[#01E676] text-[#01E676] text-[18px] font-semibold rounded-lg md:w-[140px]">
              Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
