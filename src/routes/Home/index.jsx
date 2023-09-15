export default function Home() {
    const handlePromoClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <main className="home-main">
            <h1>Home</h1>
            <div className="promo-container">
                <div className="promo" onClick={() => handlePromoClick("hhttps://www.magazineluiza.com.br/smartphone-samsung-galaxy-a14-128gb-preto-4g-octa-core-4gb-ram-66-cam-tripla-selfie-13mp-dual-chip/p/236721400/te/ga14/?seller_id=magazineluiza&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=68710&gclid=CjwKCAjwgZCoBhBnEiwAz35RwvIYPT5_6hjUNJzGkX4W3UuaiDSqu2qZbscuv7TB-kpNjjWcIxuBvhoCwVcQAvD_BwE&gclsrc=aw.ds")}>
                    <h2>Promoção 1</h2>
                    <img src="img\celular.png" alt="Site da Magalu" />
                    <p>Smartphone Samsung Galaxy A14 
                        Memória: 128GB 
                        Cor: Preto 
                        Descrição: 4G Octa-Core 4GB RAM 6,6 Câm. Tripla + Selfie 13MP Dual Chip.</p>
                </div>
                <div className="promo" onClick={() => handlePromoClick("https://www.magazineluiza.com.br/notebook-dell-inspiron-i15-i1100-u10p-15-6-full-hd-intel-pentium-gold-4gb-128gb-ssd-linux-preto/p/kh2cbd6239/in/note/?seller_id=dell&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=69994&gclid=CjwKCAjwgZCoBhBnEiwAz35RwszEJnWextk_0VHLo-OdxtacYAG3Pb7Djc8HQ_otTdCUoZNQsXwPehoCSYkQAvD_BwE&gclsrc=aw.ds")}>
                    <h2>Promoção 2</h2>
                    <img src="img\notebook.jpg" alt="Site da Magalu" />
                    <p>Tem interesse em adquirir um notebook de qualidade? Vem para Magalu.</p>
                </div>
            </div>
        </main>
    );
}