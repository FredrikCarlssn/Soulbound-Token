import "../styles/spinner.css";
import styled from "styled-components";

export const Spinner = () => {
  const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
  `;

  return (
    <Spinner>
      <div className="spinner"></div>
    </Spinner>
  );
};
