import { useParams } from 'react-router-dom';
import { listaProdutos } from '../../listaProdutos';

export default function VisualizarProduto() {
    const { id } = useParams();
    const produto = listaProdutos.find(prod => prod.id === id);

    if (!produto) {
        return <p>Não encontramos esse produto.</p>;
    }

    return (
        <main>
            <h1>Visualizar Produto</h1>
            <div>
                <h2>{produto.nome}</h2>
                <img src={produto.imagem} alt={produto.nome} />
                <p>Descrição: {produto.descricao}</p>
                <p>Preço: R${produto.preco}</p>
                
            </div>
        </main>
    );
}