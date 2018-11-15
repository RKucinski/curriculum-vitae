import React from 'react'


const data = {

  dataFR: {
    name: "Roman Kucinski, 34 ans",
    title: "Développeur Fullstack JavaScript",
    story: <p>Après une reconversion intensive et une immersion dans le code durant plusieurs mois, je suis désormais prêt à commencer ma carrière dans le développement d'applications web. Aujourd'hui, je cherche des opportunités qui me permettront de poursuivre ma montée en compétence et de m'épanouir professionnellement.</p>,
    experiences: {
      title: "Expériences",
      exp: [
        {
          header: <p><strong>Wild Code School, Lyon. </strong><span>5 mois : 09/2018 à 02/2019</span></p>,
          title: "Etudiant promotion JavaScript",
          text:
            <ul>
              <li>Premier projet : <a href="http://www.alba-interactive.com/">Portfolio d'élèves</a></li>
              <li className="sousprojet">Technos: <b>Bootstrap 4</b></li>
              <li>Deuxième projet : "Potter Clash"</li>
              <li className="sousprojet">Jeu sur le thème d'Harry Potter</li>
              <li className="sousprojet">Technos: <b>React.js</b> et sans Redux (imposé)</li>
              <li>Hackathon : Halloween </li>
              <li className="sousprojet">Application en <strong>React.js</strong> utilisant l'API de géolocalisation Google et mettant en relation les donneurs et chercheurs de bonbons.</li>
              <li>Troisième projet : en cours. </li>
              <li className="sousprojet">Site communautaire autour d'un jeu développé avec le framework Melon.js</li>
              <li className="sousprojet">Technos : <b>React.js, Redux ou Context, Node.js, MongoDB, Melon.js</b></li>
              <li className="sousprojet">Site web + Jeu + Dossier CNC</li>
            </ul>


          // <p>Premier projet : <a href="http://www.alba-interactive.com/">Portfolio d'élèves</a>  <br></br>
          //   <span className="sousprojet">Technos: Bootstrap 4 </span><br></br>
          //   Deuxième projet : "" Jeu sur le thème de Harry Potter, inspiré de l'ancêtre Bomberman. <br></br>
          //   <span className="sousprojet">Technos: React.js et sans Redux (imposé)</span><br></br>
          //   Troisième projet : en cours. <br></br>
          //   <span className="sousprojet">
          //     Site communautaire autour d'un jeu développé avec le framework Melon.js. <br></br>
          //     Technos : React.js, Redux ou Context, Node.js, MongoDB, Melon.js.<br></br>
          //     Site web + Jeu + Dossier CNC
          //   </span>
          // </p>
        },
        {
          header: <p><strong>AXA Asssistance France, Lyon.</strong> <span>9 ans : 06/2009 à 08/2018</span></p>,
          title: "Expert en gestion multilingue",
          text:
            <p>
              <ul>
                <li>Gestion de sinistres internationaux</li>
                <li>Reporting de flux financiers</li>
                <li>Testeur de non-régression logicielle</li>
                <li>Réception d'appels multilingues</li>
              </ul>
            </p>
        },
      ]
    },
    studies: {
      title: "Etudes",
      etude: [
        {
          title: <p><strong>Wild Code School, Lyon </strong><span>Septembre 2018 à Février 2019</span></p>,
          text: <p>Titre d'Etat de Développeur logiciel, inscrit au RNCP <br></br><span>En cours d'acquisition : stage ou expérience professionnelle nécéssaire</span></p>
        },
        {
          title: <p><strong>Ecole Royale Militaire de Bruxelles </strong><span>2002 - 2006</span></p>,
          text: <p>Bachelor en Sciences Sociales et Militaires <br></br><span></span></p>,
        }]
    },
    skills: {
      title: "Compétences",
      skills: [
        {
          title: "Techniques",
          skill:
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li><strong>JavaScript ES6</strong></li>
              <li><strong>React.js</strong></li>
              <li><strong>Node.js</strong></li>
              <li>Redux/Context</li>
              <li>Bootstrap 4</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Melon.js</li>
              <li>Git/Github/gitlab</li>
            </ul>,
        },
        {
          title: "Soft Skills",
          skill:
            <ul>
              <li><strong>Créativité</strong></li>
              <li>Empathie</li>
              <li>Aisance sociale</li>
              <li><strong>Esprit d'équipe</strong></li>
              <li>Positivisme</li>
              <li>Communication orale</li>
              <li>Communication écrite</li>
              <li><strong>Adaptabilité</strong></li>
              <li>Anglais</li>
              <li>Apprendre à apprendre / Ami de Google</li>
            </ul>,
        },
      ]
    },
    hobbies: {
      title: "Intérêts",
      hobbies:
        <ul>
          <li>Lecture</li>
          <li>Ecriture</li>
          <li>Jeu de rôle</li>
          <li>Dessin</li>
          <li>Jeux vidéos</li>
        </ul>,
    },
    contact: {
      email: "roman.kucinski@gmail.com",
      GitHub: "https://github.com/RKucinski",
      LinkedIn: "https://www.linkedin.com/in/roman-kucinski-270b10bb/",
    }
  },


  dataEN: {
    name: "Roman Kucinski, 34 yo",
    title: "Full-Stack JavaScript Developer",
    story: <p>After some years working around, I have finaly made up my mind and started an intensive 5 months bootcamp. I am now ready to undertake a career in web development and looking foward to land a junior job as soon as possible.</p>,
    experiences: {
      title: "Work Experience",
      exp: [
        {
          header: <p><strong>Wild Code School, Lyon. </strong><span>5 months : 09/2018 to 02/2019</span></p>,
          title: "Javascript Student",
          text:
            <ul>
              <li>First project : <a href="http://www.alba-interactive.com/">Portfolio</a></li>
              <li className="sousprojet">Coded with: <b>Bootstrap 4</b></li>
              <li>Second project : "Potter Clash"</li>
              <li className="sousprojet">Game based on the film Harry Potter and the Goblet of Fire</li>
              <li className="sousprojet">Coded with: <b>React.js</b> and without Redux</li>
              <li>Hackathon : Halloween </li>
              <li className="sousprojet">Application <strong>React.js</strong> using Google API and Global Positionning System in order for candy seekers and givers to be linked</li>
              <li>Third project : In progress </li>
              <li className="sousprojet">Community site around a game which will also be developped by my team</li>
              <li className="sousprojet">Coded with: <b>React.js, Redux or Context, Node.js, MongoDB, Melon.js</b></li>
            </ul>
        },
        {
          header: <p><strong>AXA Asssistance France, Lyon. </strong><span>9 years : 06/2009 to 08/2018</span></p>,
          title: "Multilingual clearing expert",
          text:
            <p>
              <ul>
                <li>International claims management</li>
                <li>Financial reporting</li>
                <li>Key User in non-regression testing</li>
                <li>Handling of international calls.</li>
              </ul>
            </p>
        },
      ]
    },
    studies: {
      title: "Studies",
      etude: [
        {
          title: <p><strong>Wild Code School, Lyon </strong><span>September 2018 to February 2019</span></p>,
          text: <p>French degree : Titre d'Etat de Développeur logiciel, inscrit au RNCP<br></br><span>In progress : Traineeship needed</span></p>
        },
        {
          title: <p><strong>Royal Military School of Belgium </strong><span>2002 - 2006</span></p>,
          text: <p>Bachelor Social and Military Science <br></br><span></span></p>,
        }]
    },
    skills: {
      title: "Skills",
      skills: [
        {
          title: "Technical",
          skill:
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li><strong>JavaScript ES6</strong></li>
              <li><strong>React.js</strong></li>
              <li><strong>Node.js</strong></li>
              <li>Redux/Context</li>
              <li>Bootstrap 4</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Melon.js</li>
              <li>Git/Github/gitlab</li>
            </ul>,
        },
        {
          title: "Soft Skills",
          skill:
            <ul>
              <li><strong>Creativity</strong></li>
              <li>Empathy</li>
              <li>Social fluency</li>
              <li><strong>Team spirit</strong></li>
              <li>Positivism</li>
              <li>Oral communication</li>
              <li>Written communication</li>
              <li><strong>Adaptability</strong></li>
              <li>French</li>
              <li>Fast learner / Google friend</li>
            </ul>,
        },
      ]
    },
    hobbies: {
      title: "Hobbies",
      hobbies:
        <ul>
          <li>Reading</li>
          <li>Writing</li>
          <li>Roleplaying games</li>
          <li>Drawing</li>
          <li>Video games</li>
        </ul>,
    },
    contact: {
      email: "roman.kucinski@gmail.com",
      GitHub: "https://github.com/RKucinski",
      LinkedIn: "https://www.linkedin.com/in/roman-kucinski-270b10bb/",
    }
  }
}

export default data