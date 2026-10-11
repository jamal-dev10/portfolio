import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Social() {
    return (
        <section id="social" className="section bg-surface/50 py-12 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="section-title text-center mt-5 mb-12">
                    Social Media
                </h2>
                <div className="flex justify-center items-center gap-8">
                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/jamal_e10/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <FontAwesomeIcon icon={faSquareInstagram} size="4x" style={{ color: '#E1306C' }} />
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/jamal-ezziouani-8ab707252/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="4x" style={{ color: '#0A66C2' }} />
                    </a>

                    {/* GitHub (kaytbddl m3a theme) */}
                    <a 
                        href="https://github.com/jamal-dev10" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform text-content"
                    >
                        <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Social;