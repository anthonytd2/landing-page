import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import HeroRectangleOne from "../assets/rectangleOne.png";
import HeroRectangleTwo from "../assets/rectangleTwo.png";
import "../styles/hero.css";
import Card from "../components/Card";
import "../styles/solution.css";
import "../styles/pricing.css";
import "../styles/footer.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Solar Locações" width={220} height={80} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    {/* MELHORIA: Fechar o menu ao clicar no link */}
                    <li>
                      <a onClick={() => setShowMobileMenu(false)} href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#solution"
                      >
                        Soluções
                      </a>
                    </li>
                    {/* Faça o mesmo (onClick...) para os outros links do menu mobile */}
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      {/* INÍCIO DA SECTION HERO */}
      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Grafismo solar de fundo" />
        </span>
        <img src={HeroRectangleOne} alt="Painel solar em destaque" />

        <div className="container content">
          <p className="desktop-only">Bem-vindo à Solar Locações</p>

          {/* Texto adaptado para o seu negócio! */}
          <h1>Desconto na fatura de energia sem precisar de investimento!</h1>

          <p>
            Reduza sua conta de luz alugando nossas usinas solares. Você não
            precisa comprar equipamentos ou fazer obras, basta assinar e começar
            a economizar mês a mês.
          </p>

          <div className="flex gap-1">
            <span>
              <Button text="Simule o desconto" />
            </span>
            <span className="desktop-only">
              <Button text="Como funciona" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>
          <p>
            Inovação em energia é com a gente! A <strong>Solar Locações</strong>{" "}
            já conquistou diversos clientes. Veja as vantagens de alugar uma
            usina conosco:
          </p>
        </header>

        {/* Aqui usamos o Componente Card que criamos no desafio! */}
        <section className="even-columns">
          <Card
            title="Zero Investimento"
            description="Você não gasta 1 real com compra de placas ou instalação. Toda a estrutura já está pronta na nossa usina, esperando por você."
          />
          <Card
            title="Sustentabilidade"
            description="Utilize energia 100% limpa e renovável. Ajude a preservar o meio ambiente enquanto reduz os custos da sua fatura mensal."
          />
          <Card
            title="Sem Burocracia"
            description="Processo de locação simplificado e digital. Nós cuidamos de toda a documentação junto à concessionária de energia da sua região."
          />
        </section>
      </section>
      {/* NOVA SECTION: PREÇOS (Adaptada para Solar Locações) */}
      <section className="container" id="pricing">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos de locação</h2>
        </header>

        <section className="even-columns gap-1.5">
          {/* Cartão 1: Básico */}
          <div className="pricing-card">
            <span className="plan">
              <h3>Residencial</h3>
              <p>Ideal para casas e apartamentos de pequeno porte.</p>
            </span>
            <h2>
              R$ 150 <span>/mês</span>
            </h2>
            <Button text="Assinar agora" secondary />
            <span className="hr" />
            <ul className="features">
              <li>Economia de até 15%</li>
              <li>Sem taxa de adesão</li>
              <li>Manutenção inclusa</li>
            </ul>
          </div>

          {/* Cartão 2: Premium (Em Destaque) */}
          <div className="pricing-card premium">
            <span className="bonus">1º MÊS GRÁTIS</span>
            <span className="plan">
              <h3>Comercial</h3>
              <p>A melhor opção para padarias, mercados e lojas.</p>
            </span>
            <h2>
              R$ 450 <span>/mês</span>
            </h2>
            <Button text="Experimente de graça" />
            <span className="hr" />
            <ul className="features">
              <li>Economia de até 20%</li>
              <li>Prioridade no suporte</li>
              <li>Relatório de geração via App</li>
            </ul>
          </div>

          {/* Cartão 3: Empresarial */}
          <div className="pricing-card">
            <span className="plan">
              <h3>Industrial</h3>
              <p>Para indústrias e empresas com alto consumo.</p>
            </span>
            <h2>
              R$ 1.200 <span>/mês</span>
            </h2>
            <Button text="Assinar agora" secondary />
            <span className="hr" />
            <ul className="features">
              <li>Economia sob medida</li>
              <li>Monitoramento 24h</li>
              <li>Gerente de conta exclusivo</li>
            </ul>
          </div>
        </section>
        {/* NOVA SECTION: CONTATO (Adaptada para Solar Locações) */}
        <section className="container" id="contact">
          <header>
            <p className="desktop-only highlight-text">Envie sua dúvida</p>
            <h2>Entre em contato</h2>
            <p className="subtitle">
              Ficou com alguma dúvida sobre como alugar sua usina? Nossa equipe
              está à disposição para te ajudar a economizar na fatura.😎
            </p>
          </header>

          {/* Formulário: Em breve vamos conectar ele no Netlify Functions! */}
          <form className="contact-form">
            <input type="email" placeholder="Seu melhor Email" required />
            <input
              type="text"
              placeholder="Motivo do contato. Ex: Gostaria de uma simulação para minha padaria?"
              required
            />
            <div className="btn-container">
              <Button text="Enviar" />
            </div>
          </form>
        </section>
      </section>
      {/* NOVA SECTION: FOOTER */}
      <footer id="footer">
        <div className="container footer-content">
          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="brand-col">
            <h2 className="logo-text">Solar Locações</h2>
            <div className="social-links">
              {/* Usando textos simples para não dar erro de SVG, mas você pode trocar por ícones depois! */}
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">YouTube</a>
            </div>
          </div>

          {/* Coluna 2: Empresa */}
          <div className="links-col">
            <h3>Empresa</h3>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Faça parte do time</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Funcionalidades */}
          <div className="links-col">
            <h3>Funcionalidades</h3>
            <ul>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Análise de dados</a>
              </li>
              <li>
                <a href="#">Boot discord</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Recursos */}
          <div className="links-col">
            <h3>Recursos</h3>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Teste a Demo</a>
              </li>
              <li>
                <a href="#">Clientes</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div className="footer-bottom">
          <p>
            Feito com amor na aula de Programação Web💙 ©2024 AktieTech - Todos
            os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
