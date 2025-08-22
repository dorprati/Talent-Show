import React from 'react';

const homeStyles = {
    container: {
        direction: 'rtl',
        textAlign: 'right',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '40px auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    },
    heading: {
        color: '#2a2a2a',
        fontSize: '2.2rem',
        marginBottom: '18px'
    },
    paragraph: {
        color: '#444',
        fontSize: '1.1rem',
        marginBottom: '14px'
    },
    list: {
        paddingRight: '20px',
        marginBottom: '14px'
    },
    listItem: {
        color: '#333',
        fontSize: '1rem',
        marginBottom: '8px'
    }
};

const Home = () => {
    return (
        <div style={homeStyles.container}>
            <h1 style={homeStyles.heading}>ברוכים הבאים לטאלנט שואוקייס!</h1>
            <p style={homeStyles.paragraph}>
                זהו המקום בו תוכלו להציג את הכישרון שלכם, לגלות אנשים מוכשרים נוספים ולהתחבר לקהילה יוצרת.
            </p>
            <ul style={homeStyles.list}>
                <li style={homeStyles.listItem}>העלו פרויקטים ותוצרים אישיים</li>
                <li style={homeStyles.listItem}>צפו בעבודות של אחרים וקבלו השראה</li>
                <li style={homeStyles.listItem}>הצטרפו לדיונים ושתפו רעיונות</li>
            </ul>
            <p style={homeStyles.paragraph}>
                התחילו עכשיו והפכו לחלק מהקהילה שלנו!
            </p>
        </div>
    );
};

export default Home;