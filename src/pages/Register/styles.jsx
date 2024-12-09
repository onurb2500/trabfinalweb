import styled from "styled-components";


export const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5em;
	@media only screen and (max-width: 1440px) and (max-height: 900px) {
		height: 900px;
	}
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const DivForm = styled.div`
	color: #5a5a5a;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 1440px) and (max-height: 900px) {
		height: 800px;
		min-height: 700px;
	}
	@media only screen and (max-width: 1100px) {
		min-height: 500px;
		max-width: 418px;
		width: 100%;
		height: 90%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
`;

export const Infos = styled.form`
	width: 327px;
	box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.149);
	border-radius: 20px;
	padding: 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media only screen and (max-width: 1024px) {
		height: 94%;
		align-content: center;
	}
	@media only screen and (max-width: 375px) {
		overflow: hidden;
		padding: 1em;

	}
	@media only screen and (max-width: 320px) {
		width: 90%;
	}
`;

export const Title = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export const Paragraph = styled.p`
	display: flex;
	width: 283px;
	font-weight: 700;
	font-size: 16px;
	color: #e9b425;
	justify-content: space-around;
	margin-left: 1.5rem;
	@media only screen and (max-width: 1024px) {
		margin-left: 0rem;
	}
`;

export const Imagem = styled.div`
    display: flex;
    justify-content: space-around;
    background-image: 
        linear-gradient(rgb(255, 255, 255), rgb(186, 186, 186)); /* Degradê roxo com opacidade */
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 1100px) {
        display: none;
        width: 0px;
        height: 0px;
    }
`;

export const DivTitulo = styled.div`
    justify-content: flex-start;
    display: flex;
    h2 {
        font-size: 5em;
        margin-bottom: -1em;
        margin-left: -3em;
    }
`

export const Logo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8em;
    margin-bottom: 4em;
`;

export const DivLogo = styled.div`
    align-items: center;
    display: flex;
    gap: 1em;
    h2 {
        font-size: 5em;
    }
`

export const LogoTitulo = styled.img`
        width: 200px;
        filter: brightness(0) saturate(100%) invert(100%);
    `

export const P = styled.p`
	font-size: 1.6em;
	text-align: left;
	@media only screen and (max-width: 1100px) {
	}
	@media only screen and (max-width: 280px) {
		width: 100%;
	}
`;

export const ImagemHeader = styled.img`
	display: none;
	@media only screen and (max-width: 1100px) {
		display: inline;
		width: 200px;
		margin-top: 35px;
		margin-left: -10px;
	}
`;

export const DivInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	@media only screen and (max-width: 1100px) {
		width: 107%;
		align-items: left;
	}
	@media only screen and (max-width: 375px) {
		width: 107%;
	}
	@media only screen and (max-width: 320px) {
		width: 108%;
		display: flex;
		flex-direction: column;
		align-items: left;
	}
`;
