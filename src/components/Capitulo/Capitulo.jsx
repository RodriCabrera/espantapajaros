import React from "react";
import {
	CapituloContainer,
	TextContainer,
	CapituloHeader,
} from "./Capitulo.elements";

const Capitulo = ({ numeroDeCapitulo, contenido }) => {
	const texto = () => {
		return contenido.map((parrafo) => (
			<p key={contenido.indexOf(parrafo)}>{parrafo}</p>
		));
	};
	return (
		<CapituloContainer id={`capitulo${numeroDeCapitulo}`}>
			<CapituloHeader>{numeroDeCapitulo}</CapituloHeader>
			<TextContainer>{texto()}</TextContainer>
		</CapituloContainer>
	);
};

export default Capitulo;
