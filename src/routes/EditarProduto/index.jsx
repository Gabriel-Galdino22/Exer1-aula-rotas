import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"

export default function EditarProduto(){
    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0] 
    
    const salvar = ()=>{ 
    alert (`Produto: ${produto.nome} editado com sucesso!`)
    return navegacao('/produto')
    } 
    
    return (
        <main>
            <h1>EditarProduto</h1>
            <p>Editando informações do produto: {produto.nome} </p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}