import React, { useState } from "react";
import "./HeroSection.css";
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeTaskImage, setActiveTaskImage] = useState(null);
  const [activeTask, setActiveTask] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/login'); // Navigate to Login page
  };
  const visibleCardsCount = 3; // Number of visible cards

  const handleImageChange = (taskType) => {
    switch (taskType) {
      case "boards":
        setActiveTaskImage("images/drag1 (1).png");
        break;
      case "lists":
        setActiveTaskImage("images/drag1 (2).png");
        break;
      case "cards":
        setActiveTaskImage("images/drag1 (3).png");
        break;
      default:
        setActiveTaskImage("");
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCardsCount < actionItems.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-container">
        <div className="text-content">
          <h1>Trello brings all your tasks, teammates, and tools together</h1>
          <p>Keep everything in the same place—even if your team isn’t.</p>
          <div className="form-container">
            <input type="email" placeholder="Email" />
            {/* <button className="signup-btn">Sign up – it’s free!</button> */}
            <button className="signup-btn" onClick={handleSignup}>
            Sign up – it’s free!
          </button>
          </div>
          <a href="#watch-video" className="watch-video-link">
            Watch video <span>▶</span>
          </a>
        </div>
        <div className="image-content">
          <img src="images/hero.png" alt="Hero" />
        </div>
      </div>

      {/* Trello 101 Section */}
      <div className="trello-101-container">
        <h2>Trello 101</h2>
        <h3>A productivity powerhouse</h3>
        <p>
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done.
        </p>
      </div>

      {/* Task Section */}
     <div className="task-section">
      <div className="task-content">
        <div className="task-items">
          <div
            className={`task-item ${activeTask === 'boards' ? 'active' : ''}`}
            onClick={() => handleImageChange("boards")}
          >
            <h3>Boards</h3>
            <p>
              Trello boards keep tasks organized and <br />
              work moving forward. In a glance, see <br />
              everything from “things to do” to “aww <br />
              yeah, we did it!”
            </p>
          </div>
          <div
            className={`task-item ${activeTask === 'lists' ? 'active' : ''}`}
            onClick={() => handleImageChange("lists")}
          >
            <h3>Lists</h3>
            <p>
              The different stages of a task. Start as simple as<br />
              To Do, Doing, or Done—or build<br />
              a workflow custom fit to your team’s <br />
              needs. There’s no wrong way to Trello.
            </p>
          </div>
          <div
            className={`task-item ${activeTask === 'cards' ? 'active' : ''}`}
            onClick={() => handleImageChange("cards")}
          >
            <h3>Cards</h3>
            <p>
              Cards represent tasks and ideas and<br />
              hold all the information to get the job <br />
              done. As you make progress, move cards <br />
              across lists to show their status.
            </p>
          </div>
        </div>
        {activeTaskImage && (
          <div className="task-image-content">
            <img src={activeTaskImage} alt="Task representation" />
          </div>
        )}
      </div>
    </div>

      {/* Trello in Action Section */}
      <div className="trello-action-section">
        <h2>Trello in Action</h2>
        <h2>Workflows for any project, big or small</h2>
        <div className="action-cards-wrapper">
          <button className="swap-button" onClick={handlePrevious}>
            &lt;
          </button>
          <div className="action-cards">
            {actionItems
              .slice(startIndex, startIndex + visibleCardsCount)
              .map((item, index) => (
                <div className="action-card" key={index}>
                  <img src={item.logo} alt={`${item.title} logo`} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
          </div>
          <button className="swap-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
      <div className="horizontal-content">
  <p>
    No need to start from scratch. Jump-start your workflow with a proven 
    playbook designed for different teams. Customize it to make it yours.
  </p>
  <button type="btn1">Explore all Use Cases</button>
</div>


      {/* Image and Paragraph Section */}
      <section className="image-paragraph-section">
        <div className="final-section">
          <h1>See work in a whole new way</h1>
          <h1>
            {" "}
            View your team’s projects from every angle and bring a fresh
            perspective to the task at hand.
          </h1>
          <button type="btn">Discover all Trello views</button>
          <div className="content-block">
            <img src="images/image1.png" alt="img1" />
            <p>
              Hit deadlines every time.<br></br> 
              From weekly sprints to annual planning,<br></br> 
               Timeline view keeps all tasks on track.<br></br> 
                Quickly get a glimpse of what’s coming <br></br> 
                down the pipeline and identify any gaps <br></br> 
                that might impede your team’s progress.<br></br>
                <a href="#">Learn more about Timeline view</a>
</p>
          </div>
          <div className="content-block reverse">
          <img src="images/image2.png" alt="img2" />

            <p>
              STAY ON TOP OF TASKS.<br></br> 
              Start each day without any surprises.<br></br>
               Whether scheduling an editorial calendar<br></br>
                or staying on top of to-dos, Calendar<br></br> 
                view is like a crystal ball giving you a<br></br>
                 clear vision of what work lies ahead.<br></br>
                 <a href="#">Learn more about Calendar view</a>
                 </p>
          </div>
        </div>
      </section>

      {/* Final Section with Blue Background */}
      <section>
      <div className="center-align">
        <p>
          POWERFUL WAYS TO GROW.<br />
          <span className="bold-text">Do more with Trello.</span><br />
          Trello’s intuitive features give any team the ability to quickly set
          up<br />
          and customize workflows for just about anything.
        </p>
      </div>
    </section>

      <section class="features-row">
  <div className="feature-item">
    <img src="/images/Integration.png" alt="Integrations Image" />
    <p>
      <strong>Integrations</strong><br />
      Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.
    </p>
    <button className="btn1">Browse Integrations</button>
  </div>

  <div className="feature-item">
    <img src="/images/ButlerAutomation.png" alt="Automation Image" />
    <p>
      <strong>Butler Automation</strong><br />
      No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.
    </p>
    <button className="btn1">Get to know Automation</button>
  </div>

  <div className="feature-item">
    <img src="/images/TrelloEnterprisee.png" alt="Enterprise Image" />
    <p>
      <strong>Trello Enterprise</strong><br />
      The productivity tool teams love, paired with the features and security needed for scale.
    </p>
    <button class="btn1">Explore Enterprise</button>
  </div>
</section>
 <div className="pricing-page">
      <h1>Trello priced your way</h1>
      <p>Trusted by millions, Trello powers teams all around the world.</p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Free</h2>
          <p className="price">$0 USD</p>
          <p>Free for your whole team</p>
          <p>For individuals or teams looking to organize any project.</p>
        </div>
        <div className="pricing-card">
          <h2>Standard</h2>
          <p className="price">$5 USD</p>
          <p>Per user/month if billed annually ($6 billed monthly)</p>
          <p>For small teams that need to manage work and scale collaboration.</p>
        </div>
        <div className="pricing-card">
          <h2>Premium</h2>
          <p className="price">$10 USD</p>
          <p>Per user/month if billed annually ($12.50 billed monthly)</p>
          <p>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
        </div>
        <div className="pricing-card">
          <h2>Enterprise</h2>
          <p className="price">$17.50 USD</p>
          <p>Per user/month - billed annually ($210.00 annual price per user)</p>
          <p>For organizations that need to connect work across teams with more security and controls.</p>
        </div>
      </div>
    </div>
    <div className="team-join-section">
        <h2>Join over 2,000,000 teams worldwide that are using Trello to get more done.</h2>
        <div className="company-logos">
          <img src="/images/visa.png" alt="Visa" />
          <img src="/images/coinbase.png" alt="Coinbase" />
          <img src="/images/john.png" alt="John Deere" />
          <img src="/images/zoom.png" alt="Zoom" />
          <img src="/images/grantt.png" alt="Grand Hyatt" />
          <img src="/images/frender.png" alt="Fender" />
        </div>
      </div>
      {/* <img class="last-image" src="/images/last.png" alt="last img"/> */}
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h4>About Trello</h4>
      <p>What’s behind the boards.</p>
    </div>
    <div className="footer-section">
      <h4>Jobs</h4>
      <p>Learn about open roles on the Trello team.</p>
    </div>
    <div className="footer-section">
      <h4>Apps</h4>
      <p>Download the Trello App for your Desktop or Mobile devices.</p>
    </div>
    <div className="footer-section">
      <h4>Contact us</h4>
      <p>Need anything? Get in touch and we can help.</p>
    </div>
  </div>


  <div class="footer-bottom">
    <div class="language-selector">
      Čeština
    </div>
    <div class="footer-links">
      <a href="#">Privacy Policy</a> | 
      <a href="#">Terms</a> | 
      <span>Copyright © 2024 Atlassian</span>
    </div>
  </div>
</footer>


    </>
  );
};

// Data for action cards
const actionItems = [
  {
    title: "Project Management",
    description: "Plan and track projects.",
    logo: "images/download.png",
  },
  {
    title: "Meetings",
    description: "Keep meetings on track.",
    logo: "images/download.jpg",
  },
  {
    title: "Onboarding",
    description: "Smooth onboarding process.",
    logo: "images/download (1).jpg",
  },
  {
    title: "Task Management",
    description: "Manage tasks efficiently.",
    logo: "images/download (1).png",
  },
  {
    title: "Brainstorming",
    description: "Organize ideas in real-time.",
    logo: "images/download (2).jpg",
  },
  {
    title: "Resource Hub",
    description: "Access resources in one place.",
    logo: "images/download (3).jpg",
  },
];

export default HeroSection;
