// frontend-ex/frontend-example/src/Homepage.js

import React from 'react';

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to My Homepage</h1>
            
            {/* About Me Section */}
            <section>
                <h2>About Me</h2>
                <p>Hi! I'm [Your Name], a [Your Profession/Field]. I love [Your Interests].</p>
            </section>

            {/* Internship Experiences Section */}
            <section>
                <h2>Internship Experiences</h2>
                <ul>
                    <li>Internship at Company A - [Description]</li>
                    <li>Internship at Company B - [Description]</li>
                </ul>
            </section>

            {/* Projects Section */}
            <section>
                <h2>Projects</h2>
                <ul>
                    <li><a href="[Project Link 1]">Project 1</a> - [Description]</li>
                    <li><a href="[Project Link 2]">Project 2</a> - [Description]</li>
                </ul>
            </section>

            {/* Social Media Links Section */}
            <section>
                <h2>Connect with Me</h2>
                <ul>
                    <li><a href="[LinkedIn Link]">LinkedIn</a></li>
                    <li><a href="[GitHub Link]">GitHub</a></li>
                    <li><a href="[Twitter Link]">Twitter</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Homepage;