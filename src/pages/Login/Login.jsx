import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import ButtonSignUp from "../../components/ButtonSignUp";
import SignUpInput from "../../components/SignUpInput";
import { Box, DivForm, DivInput, Infos, Title, P } from "./styles";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function onFinish(event) {
        event.preventDefault();

        const data = { email, password };

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.status === 200) {
                alert("Login bem-sucedido!");
                localStorage.setItem("token", result.token);
                navigate("/home");
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Erro de login:", error);
            alert("Erro ao tentar realizar o login.");
        }
    }

    return (
        <Box>
            <DivForm>
                <Infos onSubmit={onFinish}>
                    <Title>
                        <P>Seu acesso ao melhor está a um clique. Entre agora!</P>
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
                        <ButtonSignUp>Entrar</ButtonSignUp>
                    </DivInput>
                </Infos>
            </DivForm>
        </Box>
    );
}
