// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
    name: {
        firstname: 'Ivan',
        lastname: 'Ivanov',
    },
    position: 'Junior Fullstack JS Developer',
    salary: '600$ на місяць',
    address: 'Rivne. Soborna 67',
};
var footer = {
    social: {
        email: {
            text: 'ivanov@mail.com',
            href: 'mailto:ivanov@mail.com',
        },
        phone: {
            text: '+380670000123',
            href: 'https://www.linkedin.com/in/dmytro-test',
        },
        linkedin: {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dmytro-test',
        },
    },

};

// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('index', {})
    //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('summary', {
        // ↙ сюди вводимо JSON дані
        page: {
            title: 'Resume | Summary',
        },
        header,

        main: {
            summary: {
                title: 'Summary',
                text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
            },

            experience: {
                title: 'Other experience',
                text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
            },
        },


        footer,
    })
})

// ================================================================


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
        // ↙ сюди вводимо JSON дані
        page: {
            title: 'Resume | Skills',
        },
        header,

        main: {
            skills: [
                {
                    name: ' HTML',
                    point: 10,
                    isTop: true,
                },
                {
                    name: 'Handlebars',
                    point: 6,
                    isTop: false,
                },
                {
                    name: 'VS Code & NPM',
                    point: 10,
                    isTop: true,
                },
                {
                    name: 'Git & Terminal',
                    point: 7,
                },
                {
                    name: 'React.js',
                    point: 0,
                },
                {
                    name: 'PHP',
                    point: null,
                },

            ],

            hobbies: [
                {
                    name: 'sleep',
                    isMain: true,
                },
                {
                    name: 'read book',
                    isMain: true,
                },
                {
                    name: 'play football',
                    isMain: false,
                },
            ],

        },

        footer,
    })
})


router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
        // ↙ сюди вводимо JSON дані
        page: {
            title: 'Resume | Education',
        },
        header,

        main: {
            education: [
                {
                    name: 'Primery school 10',
                    isEnd: true,
                },
                {
                    name: 'Primery school 12',
                    isEnd: false,
                },
                {
                    name: 'Primery school 13',
                    isEnd: true,
                },
                {
                    name: 'Primery school 14',
                    isEnd: false,
                },
                {
                    name: 'Primery school 15',
                    isEnd: true,
                },

            ],
            certificates: [
                {
                    name: 'EPI',
                    id: 8,
                },
                {
                    name: 'Graduate Certification',
                    id: 5,
                },
                {
                    name: 'Higher Education',
                    id: 2,
                },
            ],
        },

        footer,
    })
})


router.get('/work', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {
        // ↙ сюди вводимо JSON дані

        layout: 'big',


        page: {
            title: 'Resume | Work',
        },
        header,

        main: {
            works: [
                {
                    position: 'Junior Fullstack Developer',
                    company: {
                        name: 'IT Brains',
                        url: 'null',
                    },
                    duration: {
                        from: '10.10.2022',
                        to: null,
                    },
                    projectAmount: 3,

                    projects: [{
                        name: 'Resume',
                        url: 'https://resume.com.ua/',
                        about: 'Airbnb competitor. High-load application for searching apartments',
                        stacks: [
                            {
                                name: 'React.js',
                            },
                            {
                                name: 'HTML / CCS',
                            },
                            {
                                name: 'Node.js',
                            },
                        ],
                        awards: [
                            {
                                name: 'Background verification - is a feature that provides users to prove that they are real persons.',
                            },
                            {
                                name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                            },
                        ],
                        stackAmount: 3,
                        awardAmount: 2,
                    },

                    ],
                },
            ],
        },

        footer,
    })
})
// Підключаємо роутер до бек-енду
module.exports = router
