// frontend-ex/frontend-example/src/Homepage.js

import React from 'react';
import { Card, Link } from '@nextui-org/react'; // Import available components
import './Component.css'; // Import the CSS file

const Homepage = () => {
    return (
        <div className="container">
            <h1 className="heading">Welcome to My Homepage</h1>
            
            {/* About Me Section */}
            <Card className="card">
                <h2 className="heading">About Me</h2>
                <p>
                    Hi! I'm [Your Name], a [Your Profession/Field]. I love [Your Interests].
                </p>
            </Card>

            {/* Internship Experiences Section */}
            <Card className="card">
                <h2 className="heading">Internship Experiences</h2>
                <ul className="list">
                    <li className="list-item">Internship at Company A - [Description]</li>
                    <li className="list-item">Internship at Company B - [Description]</li>
                </ul>
            </Card>

            {/* Projects Section */}
            <Card className="card">
                <h2 className="heading">Projects</h2>
                <ul className="list">
                    <li className="list-item">
                        <Link href="[Project Link 1]" className="link">Project 1</Link> - [Description]
                    </li>
                    <li className="list-item">
                        <Link href="[Project Link 2]" className="link">Project 2</Link> - [Description]
                    </li>
                </ul>
            </Card>

            {/* Social Media Links Section */}
            <Card className="card">
                <h2 className="heading">Connect with Me</h2>
                <ul className="list">
                    <li className="list-item"><Link href="[LinkedIn Link]" className="link">LinkedIn</Link></li>
                    <li className="list-item"><Link href="[GitHub Link]" className="link">GitHub</Link></li>
                    <li className="list-item"><Link href="[Twitter Link]" className="link">Twitter</Link></li>
                </ul>
            </Card>

            <p style={{ textAlign: 'center', color: '#888' }}>
                © {new Date().getFullYear()} [Your Name]. All rights reserved.
            </p>
        </div>
    );
};

export default Homepage;