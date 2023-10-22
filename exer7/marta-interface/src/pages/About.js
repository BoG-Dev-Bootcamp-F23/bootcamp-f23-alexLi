import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About MARTA</h1>
      <h2>History & Vision</h2>

      <h3>Our History</h3>
      <p>
        We started MARTA with a commitment to making public transit a reliable service — one that boosts economic development and enhances the lives of people across Metro Atlanta.
      </p>
      <p>
        Our story began in the 1950s when people first started to recognize the importance of Atlanta’s public transportation. They saw it as more than just a way to get people from point A to point B. They saw it as a vital part of the city’s future growth.
      </p>
      <p>
        Conversations changed to action in the 1960s when the Metropolitan Atlanta Transit Study Commission released its report recommending a five-county bus and rail system. The report prompted a wave of proposals for a revamped transit system. And in 1965, those proposals led to the passing of the Metropolitan Atlanta Rapid Transit Authority Act — or as we know it today: MARTA.
      </p>
      <p>
        But we didn’t put up 48 miles of rail and 740 bus stops overnight. It took nearly seven years of legislative and electoral work, along with a voter referendum, to gain the support we needed to make MARTA a reality. In 1972, we purchased the Atlanta Transit System, giving us full ownership of Atlanta’s main bus system. Within a year, we saw ridership increase more than 20 percent across the board.
      </p>
      <p>
        We spent the better part of the ’70s laying the groundwork for MARTA’s rapid rail system. With more than $800 million in grant support from the federal government, we began operation of the East Line in 1979 — marking the start of our combined bus and rail service. By June 1996, we completed more than 20 major projects including the Airport rail line, the North Line, transit beyond the perimeter, and a variety of improvements to our existing infrastructure.
      </p>
      <p>
        However, providing Atlanta with better public transit is only half of the story. A substantial part of our work involves driving economic development in the communities around our city. That’s why we’ve committed ourselves to Transit Oriented Development, beginning in the late ‘90s with Lindbergh Center Station. The idea is simple: build walkable, livable communities that put everything riders could need within walking distance from MARTA. Today, these developments help us drive $1.4 billion in economic activity annually in Georgia.
      </p>
      <p>
        Although the way we serve this city has changed over the years, our commitment remains the same. We believe public transportation is far more than a last resort. It’s a chance to better serve the people and communities all throughout our city.
      </p>

      <h3>Our Vision</h3>
      <p>People taking People where they want to go today and tomorrow.</p>

      <h2>Our Mission</h2>
      <p>To advocate for and provide safe, multimodal transit services that advance prosperity, connectivity, and equity for a more livable region.</p>

      <h2>Our Priorities</h2>
      <p>Every day, we will do our part at MARTA to operate a transit system that:</p>
      <ul>
        <li>Consistently provides excellence in customer service</li>
        <li>Delivers the capital program with speed and efficiency</li>
        <li>Strengthens the MARTA brand</li>
        <li>Demonstrates fiscal responsibility</li>
      </ul>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default About;