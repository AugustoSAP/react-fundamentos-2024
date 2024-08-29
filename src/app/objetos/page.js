'use client'

import Pagina from "../components/Pagina";
import React, { useState } from 'react';

export default function Objetos() {

    const carros = [
        { marca: 'GM', modelo: 'Corsa', cor: 'Rosa', foto: '' }, 
        { marca: 'GM', modelo: 'Celta', cor: 'Preto', foto: '' }, 
        { marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelha', foto: '' }, 
        { marca: 'VW', modelo: 'Fusca', cor: 'Prata', foto: '' }, 
        { marca: 'GM', modelo: 'Cobalt', cor: 'Branco', foto: '' }, 
    ];

    function Contador() {
        const [count, setCount] = useState(0);

        const handleIncrement = () => {
            setCount(count + 1);
        };

        const handleDecrement = () => {
            setCount(count - 1);
        };

        return (
            <div>
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        );
    }

    return (
        <Pagina titulo="Numeros">

            {carros.map((item, index) => (
                <p key={index}>{item.marca}</p>
            ))}

            <Contador />

        </Pagina>
    );
}
