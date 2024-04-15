// About.jsx
import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Summarize</h1>
                <p>Efficiently summarize large texts</p>
            </div>
            <div className="about-content">
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        Summarize is dedicated to providing users with a powerful tool to extract key information from lengthy texts quickly and efficiently.
                        Our mission is to empower individuals and organizations by facilitating knowledge acquisition and enhancing productivity.
                    </p>
                </section>
                <section>
                    <h2>How It Works</h2>
                    <p>
                        Using advanced natural language processing algorithms, Summarize analyzes input texts and generates concise summaries while preserving essential information.
                        Users can customize the length and granularity of the summary based on their preferences and requirements.
                    </p>
                </section>
                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>Automatic text summarization</li>
                        <li>Customizable summary length</li>
                        <li>Support for various document formats</li>
                        <li>User-friendly interface</li>
                        <li>Fast and efficient processing</li>
                    </ul>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or feedback? We'd love to hear from you! Contact our team at <a href="mailto:info@summarize.com">info@summarize.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;
