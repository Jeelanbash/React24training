import React, { useState } from 'react';




export default function DropdownList() {


    const [categories, setCategories] = useState([
        {
            name: 'Development',
            subcategories: [
                {
                    name: 'Web Developement',
                    subsubcategories: ['Java Script', 'Angular', 'React', 'Next.js', 'CSS', 'HTML', 'Nodejs']
                },
                {
                    name: 'Data Science',
                    subsubcategories: ['Subsubcategory 1-2-1', 'Subsubcategory 1-2-2']
                },
                {
                    name: 'Mobile Developement',
                    subsubcategories: ['Subsubcategory 1-2-1', 'Subsubcategory 1-2-2']
                },
                {
                    name: 'Programing',
                    subsubcategories: ['Subsubcategory 1-2-1', 'Subsubcategory 1-2-2']
                },
                {
                    name: 'Game Development',
                    subsubcategories: ['Subsubcategory 1-2-1', 'Subsubcategory 1-2-2']
                },
                {
                    name: 'Database Design & Development',
                    subsubcategories: ['Subsubcategory 1-2-1', 'Subsubcategory 1-2-2']
                },
                {
                    name: 'software Testing',
                    subsubcategories: ['Subsubcategory 1-1-1', 'Subsubcategory 1-1-2']
                },
                {
                    name: 'Software Engineering',
                    subsubcategories: ['Subsubcategory 1-1-1', 'Subsubcategory 1-1-2']
                },
                {
                    name: 'Software Development Tools',
                    subsubcategories: ['Subsubcategory 1-1-1', 'Subsubcategory 1-1-2']
                }
            ]
        },
        {
            name: "Bisiness",
            subcategories: [
                {
                    name: 'Business-1',
                    subsubcategories: ['Business-1-1', 'Business-1-2']
                },
                {
                    name: 'Business-2',
                    subsubcategories: ['Business-2-1', 'Business2-2']
                }
            ]
        },
        {
            name: "Finance & Accounting",
            subcategories: [
                {
                    name: 'Finance',
                    subsubcategories: ['fincance1', 'Account2']
                },
                {
                    name: 'Account',
                    subsubcategories: ['Account1', 'Account2']
                }
            ]
        },
        {
            name: "IT & & software",
            subcategories: [
                {
                    name: 'IT Services',
                    subsubcategories: ['Ticket1', 'Ticket2']
                },
                {
                    name: 'Software Services',
                    subsubcategories: ['Software1', 'Software2']
                }
            ]
        },
        {
            name: "Office Productivity",
            subcategories: [
                {
                    name: 'Departments',
                    subsubcategories: ['Departments1', 'Departments2']
                },
                {
                    name: 'Section',
                    subsubcategories: ['Section1', 'Section2']
                }
            ]
        },
        {
            name: "Personal Development",
            subcategories: [
                {
                    name: 'Development1',
                    subsubcategories: ['Departments1', 'Departments2']
                },
                {
                    name: 'Development2',
                    subsubcategories: ['Section1', 'Section2']
                }
            ]
        },
        {
            name: "Design",
            subcategories: [
                {
                    name: 'Design1',
                    subsubcategories: ['Departments1', 'Departments2']
                },
                {
                    name: 'Design2',
                    subsubcategories: ['Section1', 'Section2']
                }
            ]
        },
        {
            name: "Marketing",
            subcategories: [
                {
                    name: 'Sales',
                    subsubcategories: ['Departments1', 'Departments2']
                },
                {
                    name: 'Puschase',
                    subsubcategories: ['Section1', 'Section2']
                }
            ]
        },

    ]);


    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);




    const handleMouseOverCategory = (index) => {
        setActiveCategory(index);
        setActiveSubcategory(null);
    };


    const handleMouseOutCategory = () => {
        setActiveCategory(null);
        setActiveSubcategory(null);
    };


    const handleMouseOverSubcategory = (index) => {
        setActiveSubcategory(index);
    };


    const handleMouseOutSubcategory = () => {
        setActiveSubcategory(null);
    };


    return (
        <div>
            <div className="dropdown">
                <ul className="categories">
                    {categories.map((category, catIndex) => (
                        <li
                            key={catIndex}
                            onMouseOver={() => handleMouseOverCategory(catIndex)}
                            onMouseOut={handleMouseOutCategory}
                        >
                            {category.name}
                            {activeCategory === catIndex && (
                                <ul className="subcategories">
                                    {category.subcategories.map((sub, subIndex) => (
                                        <li
                                            key={subIndex}
                                            onMouseOver={() => handleMouseOverSubcategory(subIndex)}
                                            onMouseOut={handleMouseOutSubcategory}
                                        >
                                            {sub.name}
                                            {activeSubcategory === subIndex && (
                                                <ul className="subsubcategories">
                                                    {sub.subsubcategories.map((subsub, subsubIndex) => (
                                                        <li key={subsubIndex}>{subsub}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
