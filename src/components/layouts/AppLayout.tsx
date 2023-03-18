import React from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #295999;
`;

export const AppLayout = ({ children }: AppLayoutProps) => {
  return <Container>{children}</Container>;
};
