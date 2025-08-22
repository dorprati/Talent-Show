import React from 'react';

const talents = [
    { id: 1, name: 'שירה', description: 'קולות גדולים ומוזיקליים.' },
    { id: 2, name: 'ציור', description: 'ציורים מרטיטים ומרגשים.' },
    { id: 3, name: 'ריקוד', description: 'ריקודים אלגנטיים ואנרגטיים.' },
    { id: 4, name: 'כתיבה', description: 'כתיבה מעוררת עניין ומחשבה.' },
    { id: 5, name: 'בישול', description: 'כישורי בישול טעימים וחדשניים.' },
    { id: 6, name: 'צילום', description: 'תפיסת רגעים בעין חדה.' },
    { id: 7, name: 'תכנות', description: 'בניית תוכנה יעילה ואפקטיבית.' },
    { id: 8, name: 'גיטרה', description: 'לנגן מנגינות מלאות נשמה.' },
    { id: 9, name: 'פיסול', description: 'יצירת פסלים מורכבים.' },
    { id: 10, name: 'שחמט', description: 'משחק אסטרטגי וטקטי.' }
];

function Talents() {
    return (
        <div>
            <h1>כל הכישרונות</h1>
            <ul>
                {talents.map(talent => (
                    <li key={talent.id}>
                        <h2>{talent.name}</h2>
                        <p>{talent.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Talents;