import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import ButtonSignUp from "../../components/ButtonSignUp";
import SignUpInput from "../../components/SignUpInput";
import { Box, DivForm, DivInput, DivLogo, DivTitulo, Imagem, ImagemHeader, Infos, Logo, LogoTitulo, P, Title } from "./styles";

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const data = {
        email: email,
        password: password
    };


    function onSignUp(event) {
        event.preventDefault();
        onFinish(event)
        navigate('/login')
    }

    async function onFinish() {
        try {
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Erro ao criar usuário");
            }

            const result = await response.json();
            console.log("Usuário registrado com sucesso:", result);
            alert("Usuário registrado com sucesso!");
        } catch (error) {
            console.error("Erro ao registrar:", error.message);
            alert("Erro ao registrar: " + error.message);
        }
    }

    return (
        <Box>
            <DivForm>
                <Infos onSubmit={(event) => onSignUp(event)}>
                    <Title>
                        <P>
                            Cadastre-se para comprar em nossa lojinha.
                        </P>
                    </Title>
                    <DivInput>
                        <SignUpInput
                            placeholder="Digite o email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <SignUpInput
                            placeholder="Digite senha"
                            type="password"
                            name="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        {/* <Label>Crie uma senha</Label> */}
                        <ButtonSignUp>Cadastrar</ButtonSignUp>
                    </DivInput>
                </Infos>
            </DivForm>
        </Box>
    );
}
