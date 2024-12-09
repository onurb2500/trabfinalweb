import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import ButtonSignUp from "../../components/ButtonSignUp";
import SignUpInput from "../../components/SignUpInput";
import { Box, DivForm, DivInput, Infos, Title, P } from "./styles";

export function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [inStorePickup, setInStorePickup] = useState(false);
    const [deliveryAvailable, setDeliveryAvailable] = useState(false);
    
    const navigate = useNavigate();

    async function onFinish(event) {
        event.preventDefault();

        // Preparando os dados do produto para enviar
        const data = { 
            name, 
            price, 
            stock, 
            description, 
            imageUrl, 
            category, 
            inStorePickup, 
            deliveryAvailable 
        };

        try {
            // Enviando a requisição para registrar o produto
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.status === 201) {
                // Produto registrado com sucesso
                alert("Produto registrado com sucesso!");
                navigate("/home"); // Redireciona para a página inicial
            } else {
                alert(result.error || "Erro ao registrar o produto.");
            }
        } catch (error) {
            console.error("Erro ao registrar o produto:", error);
            alert("Erro ao tentar registrar o produto.");
        }
    }

    return (
        <Box>
            <DivForm>
                <Infos onSubmit={onFinish}>
                    <Title>
                        <P>Adicione um novo produto ao seu catálogo</P>
                    </Title>
                    <DivInput>
                        <SignUpInput
                            placeholder="Nome do Produto"
                            type="text"
                            name="name"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <SignUpInput
                            placeholder="Preço"
                            type="number"
                            name="price"
                            value={price}
                            onChange={({ target }) => setPrice(target.value)}
                        />
                        <SignUpInput
                            placeholder="Quantidade em Estoque"
                            type="number"
                            name="stock"
                            value={stock}
                            onChange={({ target }) => setStock(target.value)}
                        />
                        <SignUpInput
                            placeholder="Descrição do Produto"
                            type="text"
                            name="description"
                            value={description}
                            onChange={({ target }) => setDescription(target.value)}
                        />
                        <SignUpInput
                            placeholder="URL da Imagem"
                            type="text"
                            name="imageUrl"
                            value={imageUrl}
                            onChange={({ target }) => setImageUrl(target.value)}
                        />
                        <SignUpInput
                            placeholder="Categoria"
                            type="text"
                            name="category"
                            value={category}
                            onChange={({ target }) => setCategory(target.value)}
                        />
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={inStorePickup}
                                    onChange={() => setInStorePickup(!inStorePickup)}
                                />
                                Retirada na loja
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={deliveryAvailable}
                                    onChange={() => setDeliveryAvailable(!deliveryAvailable)}
                                />
                                Entrega disponível
                            </label>
                        </div>
                        <ButtonSignUp>Cadastrar Produto</ButtonSignUp>
                    </DivInput>
                </Infos>
            </DivForm>
        </Box>
    );
}
