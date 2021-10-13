import React from "react";
import Capitulo from "../Capitulo/Capitulo";
import { capitulos } from "../../data/data";

const Contenidos = () => {
	const mapCapitulos = () => {
		return capitulos.map((capitulo) => (
			<Capitulo
				numeroDeCapitulo={capitulo.id}
				key={capitulo.id}
				contenido={capitulo.content}
			/>
		));
	};
	return <>{mapCapitulos()}</>;
};

export default Contenidos;
