const USER_MAIN_DATA = [
    {
        id: 15,
        userInfos: {
            firstName: 'Thomas (Test)',
            lastName: 'Letesteur',
            age: 28,
        },
        todayScore: 0.5,
        keyData: {
            calorieCount: 1952,
            proteinCount: 163,
            carbohydrateCount: 293,
            lipidCount: 56
        }
    }
]

const USER_ACTIVITY = [
    {
        userId: 15,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 82,
                calories: 230
            },
            {
                day: '2020-07-02',
                kilogram: 82,
                calories: 210
            },
            {
                day: '2020-07-03',
                kilogram: 83,
                calories: 270
            },
            {
                day: '2020-07-04',
                kilogram: 83,
                calories: 280
            },
            {
                day: '2020-07-05',
                kilogram: 82,
                calories: 150
            },
            {
                day: '2020-07-06',
                kilogram: 80,
                calories: 152
            },
            {
                day: '2020-07-07',
                kilogram: 78,
                calories: 380
            }
        ]
    }
]


const USER_AVERAGE_SESSIONS = [
    {
        userId: 15,
        sessions: [
            {
                day: 1,
                sessionLength: 27
            },
            {
                day: 2,
                sessionLength: 20
            },
            {
                day: 3,
                sessionLength: 42
            },
            {
                day: 4,
                sessionLength: 47
            },
            {
                day: 5,
                sessionLength: 27
            },
            {
                day: 6,
                sessionLength: 38
            },
            {
                day: 7,
                sessionLength: 56
            }
        ]
    }
]


const USER_PERFORMANCE = [
    {
        userId: 15,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 60,
                kind: 1
            },
            {
                value: 100,
                kind: 2
            },
            {
                value: 120,
                kind: 3
            },
            {
                value: 30,
                kind: 4
            },
            {
                value: 180,
                kind: 5
            },
            {
                value: 70,
                kind: 6
            }
        ]
    }
]



module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
}