import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left-container">
                <div className="footer-left-text">
                    Всеукраїнський конкурс «Саша шукає відповіді» про права жінок впроваджує агенція соціальних змін nudge
                </div>
                <div className="footer-left-text-contacts">
                    Стати партнером конкурсу у 2024 році: <a href="mailto:nudge.ua@gmail.com" className="footer-link">nudge.ua@gmail.com</a>
                </div>
            </div>
            <div className="footer-right-container">
                <div className="footer-right-contacts">
                    Контакти: <a href="tel:+380955871367" className="footer-right-text">+380955871367</a>
                </div>
                <div className="footer-right-contacts additional">
                    Якщо у вас є скарги чи пропозиції: <a href="mailto:sashalookingforanswers@gmail.com" className="footer-link">sashalookingforanswers@gmail.com</a>
                </div>
            </div>
        </div>
    );
}




