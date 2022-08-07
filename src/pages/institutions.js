import Head from "next/head"
import Link from 'next/link'
import menu from '../styles/Menu.module.css'
import institutions from '../styles/Institutions.module.css'


const ufersa = {
    sigla: "UFERSA",
    nome: "Universidade Federal Rural do Semi-Arido",
    cidade: "Mossoró",
    bairro: "Centro",
    sobre: "A Universidade Federal Rural do Semi-Árido é uma instituição pública federal de ensino superior brasileira, cuja reitoria está localizada em Mossoró, no estado do Rio Grande do Norte, e com campi nos municípios de Angicos, Caraúbas e Pau dos Ferros.",
    link: "https://ufersa.edu.br/",
    instagram: "https://www.instagram.com/ufersa/", 
    facebook: "https://www.facebook.com/Ufersa/",
    whatsapp: ""
  }

  const ifrn = {
    sigla: "IFRN",
    nome: "Instituto Federal de Ciencia e Tecnologia do Rio Grande Do Norte",
    cidade: "Natal",
    bairro: "Centro",
    sobre: "Essas escolas foram inauguradas em 2009, sob uma nova institucionalidade - em vez de unidades descentralizadas de ensino do Cefet-RN elas já nasceram como campi do novo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN).",
    link: "https://portal.ifrn.edu.br/",
    instagram: "https://www.instagram.com/ifrnoficial/", 
    facebook: "https://www.facebook.com/ifrnoficial/",
    whatsapp: ""
  }

  const uern = {
    sigla: "UERN",
    nome: "Universidade Estadual do Gio Grande do Norte",
    cidade: "Mossoró",
    bairro: "Centro",
    sobre: "A Universidade do Estado do Rio Grande do Norte é uma instituição pública brasileira de ensino superior mantida pelo governo do Estado do Rio Grande do Norte.",
    link: "https://portal.uern.br/",
    instagram: "https://www.instagram.com/uernoficial/", 
    facebook: "https://www.facebook.com/UERNoficial/",
    whatsapp: ""
  }

  const unp = {
    sigla: "UNP",
    nome: "Universidade Potiguar",
    cidade: "Natal",
    bairro: "Centro",
    sobre: "Fundada em 1981 sob a denominação de Faculdade de Administração, Ciências Contábeis e Ciências Econômicas – UNIPEC recebeu o credenciamento como UNIVERSIDADE em 1996 (D.O.U. 20/12/1996), sendo, até o presente, a única universidade privada atuando no Rio Grande do Norte. ",
    link: "https://unp.br/",
    instagram: "https://www.instagram.com/universidadepotiguar/", 
    facebook: "https://www.facebook.com/universidadepotiguar",
    whatsapp: ""
  }

  const unopar = {
    sigla: "UNOPAR",
    nome: "Universidade Norte do Paraná",
    cidade: "Natal",
    bairro: "Centro",
    sobre: "A Universidade do Estado do Rio Grande do Norte é uma instituição pública brasileira de ensino superior mantida pelo governo do Estado do Rio Grande do Norte.",
    link: "https://www.unopar.com.br/",
    instagram: "https://www.instagram.com/unopar/", 
    facebook: "https://www.facebook.com/unoparuniversidade",
    whatsapp: "https://api.whatsapp.com/send?phone=5511994326167&text=%5BTicket%20UNP0014%5D%20-%20Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Unopar."
  }


export default function Institutions () {
    return (
        <main>
            <Head>
                <title>Doação Digital</title>
                <meta name="description" content="Doaçao de computadores" />
                <link rel="icon" href="/images/icon.png" ></link>
            </Head>

            <div className='image-logo'>
                <img src="/images/logo.png"/>
            </div>

            <nav className={menu.menu}>
                <ul>
                    <li>
                    <Link href="/">
                        <a>DOAÇÃO</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/institutions">
                        <a>PARCEIROS</a>
                    </Link>
                    </li>
                </ul>
            </nav>

            <section>
                <div className={institutions.box}>
                    <h3>{ufersa.sigla}</h3>
                    <p>({ufersa.cidade} / {ufersa.bairro})</p>
                    <a href="https://ufersa.edu.br/"><h4>ufersa.edu.br</h4></a>
                    <h4>{ufersa.nome}</h4>
                    <p>{ufersa.sobre}</p>
    
                    <div className={institutions.icons}>
                        <a href="https://www.facebook.com/Ufersa/"><img src="/images/facebook.png"/></a>
                        <a href="https://www.instagram.com/ufersa/"><img src="/images/instagram.png"/></a>
                    </div>
                </div>

                <div className={institutions.box}>
                    <h3>{uern.sigla}</h3>
                    <p>({uern.cidade} / {uern.bairro})</p>
                    <a href="https://portal.uern.br"><h4>portal.uern.br</h4></a>
                    <h4>{uern.nome}</h4>
                    <p>{uern.sobre}</p>
                    <div className={institutions.icons}>
                        <a href="https://www.facebook.com/UERNoficial/"><img src="/images/facebook.png"/></a>
                        <a href="https://www.instagram.com/uernoficial/"><img src="/images/instagram.png"/></a>
                    </div>
                </div>
    
                <div className={institutions.box}>
                    <h3>{ifrn.sigla}</h3>
                    <p>({ifrn.cidade} / {ifrn.bairro})</p>
                    <a href="https://portal.ifrn.edu.br"><h4>portal.ifrn.edu.br</h4></a>
                    <h4>{ifrn.nome}</h4>
                    <p>{ifrn.sobre}</p>
                    <div className={institutions.icons}>
                        <a href="https://www.facebook.com/ifrnoficial/"><img src="/images/facebook.png"/></a>
                        <a href="https://www.instagram.com/ifrnoficial/"><img src="/images/instagram.png"/></a>
                    </div>
                </div>
   
                <div className={institutions.box}>
                    <h3>{unopar.sigla}</h3>
                    <p>({unopar.cidade} / {ifrn.bairro})</p>
                    <a href="https://www.unopar.com.br"><h4>unopar.com.br</h4></a>
                    <h4>{unopar.nome}</h4>
                    <p>{unopar.sobre}</p>
                    <div className={institutions.icons}>
                        <a href="https://www.facebook.com/unoparuniversidade"><img src="/images/facebook.png"/></a>
                        <a href="https://www.instagram.com/unopar"><img src="/images/instagram.png"/></a>
                        <a href="https://api.whatsapp.com/send?phone=5511994326167&text=%5BTicket%20UNP0014%5D%20-%20Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Unopar"><img src="/images/whatsapp.png"/></a>
                    </div>
                </div>

                <div className={institutions.box}>
                    <h3>{unp.sigla}</h3>
                    <p>({unp.cidade} / {ifrn.bairro})</p>
                    <a href="https://unp.br/"><h4>unp.br</h4></a>
                    <h4>{unp.nome}</h4>
                    <p>{unp.sobre}</p>
                    <div className={institutions.icons}>
                        <a href="https://www.facebook.com/universidadepotiguar"><img src="/images/facebook.png"/></a>
                        <a href="https://www.instagram.com/universidadepotiguar"><img src="/images/instagram.png"/></a>
                    </div>
                </div>
            </section>

            <div className='image'>
                <a href="https://www.appmasters.io/en"><img src="/images/appmasters.png"/></a>
            </div>
        </main>
    )
}