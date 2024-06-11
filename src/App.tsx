import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import Card from './components/Card/Card';
import Label from './components/Label/Label';
import Button from './components/Button/Button';
import Text from './components/Text/Text';

function App() {
  const [count, setCount] = useState(0);

  const dropdownOptions = [
    { value: 'cms', label: 'CMS Project' },
    { value: 'portfolio', label: 'Freelancing Portfolio Websites' },
    { value: 'other', label: 'Other Projects' }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Saurav Gautam</h2>
        </div>
        <div className="navbar-menu">
          <Dropdown options={dropdownOptions} disabled={false} />
        </div>
      </nav>

      <section className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a Full Stack Web Developer Student, actively learning and improving. Explore my projects below!</p>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-item">
          <Card disabled={false}>
            <Text className="portfolio-text">Project 1: CMS Project</Text>
          </Card>
        </div>
        <div className="portfolio-item">
          <Card disabled={false}>
            <Text className="portfolio-text">Project 2: Freelancing Portfolio Websites</Text>
          </Card>
        </div>
        <div className="portfolio-item">
          <Card disabled={false}>
            <Text className="portfolio-text">Project 3: Other Projects</Text>
          </Card>
        </div>
        <div className="portfolio-item">
          <Label className="portfolio-label">My Skills</Label>
          <Button disabled={false} className="portfolio-button">
            Explore More
          </Button>
        </div>
      </section>

      <footer className="footer">
        <Text>Designed and developed with ❤️ by Saurav Gautam</Text>
      </footer>
    </div>
  );
}

export default App;
