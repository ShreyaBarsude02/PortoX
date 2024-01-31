import React from 'react'
import HeaderBar from '../components/HeaderBar'
import './Home.css'

const Home = () => {
  return (
    <>
      <HeaderBar heading={"PortoX"} string1={"Every Story,"} string2={"Each Skills:"} string3={"<b>Illustrated in Every Portfolio!</b>"} img={"/assets/portoHomepage.png"} />
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Viewers</h3>
              <p>Discover exceptional talent effortlessly with PortoX. Our platform brings you a curated selection of portfolios from diverse fields, enabling you to explore a rich pool of skilled individuals. Whether you're a hiring manager, recruiter, or industry enthusiast, find the perfect match for your requirements. Browse through thoughtfully crafted portfolios, each telling a unique story of expertise and creativity. PortoX is your gateway to identifying top-tier talent and fostering meaningful connections. Elevate your recruitment process and witness the incredible potential within our community of talented professionals.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Uploaders</h3>
              <p>Embark on a journey to showcase your skills and make a lasting impression with PortoX. Upload your portfolio today and unlock a world of opportunities. Whether you're a seasoned professional or an emerging talent, our platform is your canvas to exhibit your best work. Tailor your profile, highlight your achievements, and let your portfolio speak volumes. Join a community that values your unique talents and connects you with companies eagerly seeking your expertise. Your next big opportunity awaits :- empower your career journey with PortoX</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-card">
          <h4>About PortoX</h4>
          <p>
            Welcome to PortoX, where innovation meets opportunity. Our platform is a dynamic space designed to bridge the gap between talented individuals and forward-thinking companies. With a commitment to empowering careers and facilitating meaningful connections, PortoX is reshaping the way talent is discovered and showcased.

            At PortoX, we believe in the transformative power of a well-curated portfolio. Whether you're a seasoned professional looking to elevate your career or an emerging talent seeking recognition, our platform provides a canvas for you to display your unique skills and achievements. We are dedicated to fostering a community where talent thrives, and opportunities abound.

            Our mission is to revolutionize the way individuals present their expertise while offering a seamless experience for companies to discover the perfect match. We take pride in being the catalyst for career advancements and recruitment success stories.

            Join us on this exciting journey of talent exploration and career growth. Together, let's redefine possibilities, one portfolio at a time. Welcome to PortoX.
          </p>
        </div>
      </div>
      <div className="steps">
        <div className="list">
          <h2>Tips to build Your Portfolio</h2>
          <ul>
            <li><span>Define Purpose and Audience</span></li>
            <li><span>Curate Your Best Work</span></li>
            <li><span>Provide Context and Descriptions</span></li>
            <li><span>High-Quality Presentation</span></li>
            <li><span>Include Skills and Testimonials</span></li>
            <li><span>Keep It Updated</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
