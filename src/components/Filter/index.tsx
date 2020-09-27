import React, { FC } from "react";
import styled from "styled-components";

const StyledFilter = styled.div`
	display: grid;
	grid-template-rows: 1fr 4fr;
	grid-auto-flow: row;
	padding: 12px;
	background: transparent;
	border: 1px solid #000;
	border-radius: 8px;
`;

export const Filter: FC = ({ children }) => {
	return <StyledFilter>{children}</StyledFilter>;
};
