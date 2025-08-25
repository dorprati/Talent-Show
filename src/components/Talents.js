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
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                כל הכישרונות
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {talents.map(talent => (
                    <li
                        key={talent.id}
                        className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
                    >
                        <h2 className="text-xl font-semibold text-indigo-600 mb-2 text-right">
                            {talent.name}
                        </h2>
                        <p className="text-gray-600 text-right">{talent.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Talents;
