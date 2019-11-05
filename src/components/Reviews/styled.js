import styled, { css } from 'styled-components';

const ReviewBackground = styled.div`
  height: 90px;
  width: calc(100% - 20px);
  margin-bottom: 16px;

  border-radius: 4px;
  box-shadow: 0px 0px 5px #c9d8db;

  padding: 10px;
`;

const ReviewText = styled.div`
  position: relative;
  margin-bottom: 10px;

  ${({ clamp, size, color }) =>
    css`
      height: ${(clamp && '3.6em') || ''};

      font-size: ${(size && size) || '12px'};
      color: ${(color && color) || '#9D9FB0'};

      overflow: ${clamp && 'hidden'};
    `}

  ::after {
    ${props =>
      props.clamp &&
      css`
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        height: 1.2em;
        width: 40%;
        text-align: right;

        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1) 50%
        );
      `}
  }
`;

const ReviewURL = styled.a`
  display: block;
  margin-right: 10px;

  font-size: 10px;
  color: blue;
  text-align: right;
  text-decoration: none;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export { ReviewBackground, ReviewText, ReviewURL };
