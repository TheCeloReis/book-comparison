import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.space[4]};
    cursor: pointer;
    border: 1px solid transparent;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border-radius: ${({ theme }) => theme.space[3]};

    &:hover {
      background-color: ${({ theme }) => theme.color.gray[100]};
      border: 1px solid ${({ theme }) => theme.color.primary[200]};
    }
  }
`;

export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const Cover = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.fontSize["lg"]};
  height: ${({ theme }) => theme.space[9]};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Author = styled.p`
  font-size: ${({ theme }) => theme.fontSize["sm"]};
  color: ${({ theme }) => theme.color.gray[800]};
  margin-bottom: ${({ theme }) => theme.space[1]};

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Edition = styled.p`
  font-size: ${({ theme }) => theme.fontSize["xs"]};
  color: ${({ theme }) => theme.color.gray[700]};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;
