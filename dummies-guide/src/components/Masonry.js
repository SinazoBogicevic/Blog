import styled from "styled-components";

const Masonry = styled.div`
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  margin: 0px 42px 50px;

  @media (max-width: 842px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;

export default Masonry;
