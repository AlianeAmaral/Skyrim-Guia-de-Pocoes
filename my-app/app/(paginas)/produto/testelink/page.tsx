"use client"

export default async function testelink(){

    await new Promise((resolve) => setTimeout(resolve,4000));

    return (
        <div>Bem-vindo a outra página.</div>
    );
}