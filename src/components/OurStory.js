import React from 'react';
import '../App.css';

const OurStory = () => {
  return (
    <section id="story" className="section">
      <h2>Our Story</h2>
      <div className="timeline-horizontal">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-image">
            <img
              src="/images/met.jpg" // Image for "We met & fell in love"
              alt="We met & fell in love"
            />
            <div className="timeline-text-overlay">
              <div className="timeline-date">10.07.2017</div>
              <h3>We met & fell in love</h3>
            </div>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-image">
            <img
              src="/images/dress.jpg" // Placeholder image for "We moved to AZ"
              alt="We moved to AZ"
            />
            <div className="timeline-text-overlay">
              <div className="timeline-date">07.07.2018</div>
              <h3>We moved to AZ & adopted our Goosey</h3>
            </div>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-image">
            <img
              src="/images/love.jpg" // Placeholder image for "We adventured..."
              alt="We adventured..."
            />
            <div className="timeline-text-overlay">
              <div className="timeline-date">08.24.2020</div>
              <h3>We adventured...with a lot of fishing</h3>
            </div>
          </div>
        </div>

        {/* Timeline Item 4 */}
        <div className="timeline-item">
          <div className="timeline-image">
            <img
              src="/images/car.jpg" // Placeholder image for "We proclaimed our love"
              alt="We proclaimed our love"
            />
            <div className="timeline-text-overlay">
              <div className="timeline-date">12.21.2019</div>
              <h3>We proclaimed our love for the Lord together!</h3>
              <p>Acts 22:16</p>
            </div>
          </div>
        </div>

        {/* Timeline Item 5 */}
        <div className="timeline-item">
          <div className="timeline-image">
            <img
              src="/images/engage.jpg" // Placeholder image for "WE'RE ENGAGED!"
              alt="WE'RE ENGAGED!"
            />
            <div className="timeline-text-overlay">
              <div className="timeline-date">02.24.2023</div>
              <h3>WE'RE ENGAGED!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;