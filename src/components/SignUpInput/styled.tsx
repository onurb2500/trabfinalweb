import styled from "styled-components";

export const Input = styled.input`
	color: #0000008f;
	background: #ffffff;
	box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.146);
	border: 1px solid #ffffff;
	border-radius: 50px;
	width: 100%;
	height: 0.5em;
	padding: 20px;
	font-weight: 400;
	font-size: 16px;
	@media only screen and (max-width: 1100px) {
		width: 100%;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 418px;
`;
