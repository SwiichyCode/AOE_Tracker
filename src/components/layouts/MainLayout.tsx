import React from "react";
import styled from "styled-components";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};
