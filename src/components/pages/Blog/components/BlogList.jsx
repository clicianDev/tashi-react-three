import React from "react";

function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-14">
      <div className="lg:my-5">
        <div>
          <img src="/images/Blog/images/sample.png" width={600} height={340} />
        </div>
        <div className="my-5">
          <h3 className="font-inter text-white text-xl md:text-2xl  lg:text-2xl xl:text-2xl leading-10 font-semibold ">
            Web3 Gaming: The Convergence of Traditional and Decentralized Gaming
            Platforms
          </h3>
        </div>
        <div className="text-white opacity-[0.5] font-semibold text-xl"><span>November 1, 2023</span></div>
      </div>
      <div className="lg:my-5">
        <div>
          <img src="/images/Blog/images/sample.png" width={600} height={340} />
        </div>
        <div className="my-5">
          <h3 className="font-inter text-white text-2xl leading-10 font-semibold">
            Web3 Gaming: The Convergence of Traditional and Decentralized Gaming
            Platforms
          </h3>
        </div>
        <div className="text-white opacity-[0.5] font-semibold text-xl"><span>November 1, 2023</span></div>
      </div>
      <div className="lg:my-5">
        <div>
          <img src="/images/Blog/images/sample.png" width={600} height={340} />
        </div>
        <div className="my-5">
          <h3 className="font-inter text-white text-2xl leading-10 font-semibold">
            Web3 Gaming: The Convergence of Traditional and Decentralized Gaming
            Platforms
          </h3>
        </div>
        <div className="text-white opacity-[0.5] font-semibold text-xl"><span>November 1, 2023</span></div>
      </div>
      <div className="lg:my-5">
        <div>
          <img src="/images/Blog/images/sample.png" width={600} height={340} />
        </div>
        <div className="my-5">
          <h3 className="font-inter text-white text-2xl leading-10 font-semibold">
            Web3 Gaming: The Convergence of Traditional and Decentralized Gaming
            Platforms
          </h3>
        </div>
        <div className="text-white opacity-[0.5] font-semibold text-xl"><span>November 1, 2023</span></div>
      </div>
    </div>
  );
}

export default BlogList;
