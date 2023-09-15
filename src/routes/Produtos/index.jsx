import { Link } from 'react-router-dom';
import { listaProdutos } from '../../ListaProdutos';

export default function Produtos() {
    return (
        <main>
            <h1>Produtos</h1>
            <div className="produto-container">
                {listaProdutos.map(prod => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <img src={prod.imagem} alt={prod.nome} />
                        
                        <p>Preço: R${prod.preco}</p>
                        <Link to={`/produto/visualizar/${prod.id}`}>Visualizar</Link>
                    </div>
                ))}
            </div>
        </main>
    );
}