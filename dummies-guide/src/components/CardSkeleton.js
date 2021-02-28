import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const CardSkeleton = () => {
  return (
    <SkeletonWrapper>
      <div
        style={{
          width: "100%",
          height: "120px",
        }}
      >
        <Skeleton width={`100%`} height={`120px`} />
      </div>
      <div>
        <div className="titles">
          <p>
            <Skeleton width={25} />
          </p>
          <p>
            <Skeleton width={40} />
          </p>
        </div>
        <h2 className="article-title">
          <Skeleton width={100} count={4} />
        </h2>
        <div className="titles">
          <div>
            <div>
              <Skeleton circle={true} width={60} height={60} />
            </div>
            <h5>
              <Skeleton />
            </h5>
          </div>
          <h5 style={{ paddingBottom: "4px" }}>
            <Skeleton />
          </h5>
        </div>
      </div>
    </SkeletonWrapper>
  );
};

const SkeletonWrapper = styled.div`
  width: 85%;
  border-bottom-right-radius: 8px;
  border-bttom-left-radius: 8px;
  box-shadow: 4px 4px 30px rgb(0, 0, 0, 0.5);
  margin-bottom: 42px;
  cursor: pointer;
`;

export default CardSkeleton;
