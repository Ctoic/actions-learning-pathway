import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Najam Ali Abass - Profile</title>
        <meta name="description" content="Profile of Najam Ali Abass" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Najam Ali Abass</h1>
        <p>House 24 Street 586, G13/2 Islamabad</p>
        <p>📞 +92-3173036098</p>
        <p>📧 <a href="mailto:najamabass2020@gmail.com">najamabass2020@gmail.com</a></p>

        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>FAST-National University Of Computer and Emerging Science</strong><br />
              BS Computer Science (08 2021 – Present), Islamabad, Pakistan
            </li>
            <li>
              <strong>FAST-NUCES</strong><br />
              BS Software Engineering (08 2020 – 07 2021), Peshawar, Pakistan
            </li>
          </ul>
        </section>

        <section>
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Tiles Mountain - Backend Developer</strong><br />
              06 2023 – 09 2023, Onsite<br />
              Developed and deployed an eCommerce website using PHP MVC, customized Magento features, and resolved over 30 reported bugs.
            </li>
            <li>
              <strong>GitHub Education - Maintainer and Contributor</strong><br />
              Led and mentored an open-source project, reviewing 15+ pull requests and collaborating globally.
            </li>
            <li>
              <strong>C3 Akademia - Website Developer</strong><br />
              10 2023 – 11 2023, Remote/Onsite<br />
              Collaborated to create a WordPress website, wrote blogs, and designed promotional graphics.
            </li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Hostel Management System</strong><br />
              HTML, CSS, JavaScript, PHP, SQL, XAMPP<br />
              Automated room allocation and billing, reducing manual workload by 70%.
            </li>
            <li>
              <strong>Algorithm Visualizer</strong><br />
              Python, Pygame<br />
              Visualized sorting algorithms, improving learning engagement by 50%.
            </li>
            <li>
              <strong>Lisbook</strong><br />
              HTML, CSS, JavaScript, GitHub, Netlify<br />
              Built a web application for audiobook listening, achieving 1,000+ interactions in the first month.
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <p>Python, PHP, C, C++, JavaScript, SQL, R</p>
          <p>Developer Tools: VS Code, Android Studio, IntelliJ IDEA, Blender, Figma, Canva, Linux</p>
          <p>Technologies/Frameworks: Linux, GitHub, ReactJS, Bootstrap, Streamlit, WordPress, Magento, Flask</p>
        </section>

        <section>
          <h2>Achievements</h2>
          <ul>
            <li>Dean’s List for securing GPA over 3.5/4 in Fall 2020</li>
            <li>Bronze Medal for third position in the department for Fall 2020</li>
          </ul>
        </section>

        <section>
          <h2>Extracurricular</h2>
          <ul>
            <li>
              <strong>Fast Developer Club</strong> - Web Developer<br />
              Organized workshops and web development competitions.
            </li>
            <li>
              <strong>NASCON</strong> - Event Organizer<br />
              Coordinated events focusing on technology and innovation.
            </li>
            <li>
              <strong>Head Boy</strong><br />
              Led student council initiatives at Aga Khan Higher Secondary School, Gilgit.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
