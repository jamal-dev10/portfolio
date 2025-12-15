import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Social() {
    return (
        <section id="social" className="section bg-zinc-950 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="section-title text-center text-white mt-5 mb-12">
                    Social Media
                </h2>
                <div className="flex justify-center items-center gap-8">
                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/yourprofile" 
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

                    {/* GitHub */}
                    <a 
                        href="https://github.com/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <FontAwesomeIcon icon={faGithub} size="4x" style={{ color: '#ffffffff' }} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Social;
