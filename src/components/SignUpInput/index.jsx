// SignUpInput Component
import React from "react";
import { Container, Input } from "./styled";

const applyCpfMask = (value) => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const applyDateMask = (value) => {
    return value
        .replace(/\D/g, '') 
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3') 
        .substring(0, 10);
};


const applyPhoneMask = (value) => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})(\d)/, '$1-$2')
		.replace(/(-\d{4})\d+?$/, '$1');
};

const SignUpInput = ({ placeholder, type, name, value = "", onChange }) => {
	const handleChange = (e) => {
		const inputValue = e.target.value || "";
		let formattedValue = inputValue;

		if (type === "cpf") {
			formattedValue = applyCpfMask(inputValue);
		} else if (type === "dateFormat") {
			formattedValue = applyDateMask(inputValue);
		} else if (type === "telefone") {
			formattedValue = applyPhoneMask(inputValue);
		}

		if (onChange) {
			onChange({ target: { name, value: formattedValue } });
		}
	};

	const formattedValue = type === "cpf"
		? applyCpfMask(value)
		: type === "date"
			? applyDateMask(value)
			: type === "telefone"
				? applyPhoneMask(value)
				: value;

	return (
		<Container>
			<Input
				placeholder={placeholder}
				type={type}
				name={name}
				value={formattedValue || ""} // Define valor padrão para evitar `undefined`
				onChange={handleChange}
			/>
		</Container>
	);
};

export default SignUpInput;
