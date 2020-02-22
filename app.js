const science = {id: 1, name: "science"};
const language = {id: 2, name: "language"};
const math = {id: 3, name: "math"};
const subjectGroups = [science, language, math];

const kiswahili = {
    id: 1,
    subject_group_id: 2,
    subjectGroup: language,
    name: "kiswahili",
    hasLab: false
};
const english = {
    id: 2,
    subject_group_id: 2,
    subjectGroup: language,
    name: "english",
    hasLab: false
};
const biology = {id: 3, subject_group_id: 1, subjectGroup: science, name: "biology", hasLab: true};
const physics = {id: 4, subject_group_id: 1, subjectGroup: science, name: "physics", hasLab: true};
const mathematics = {
    id: 5,
    subject_group_id: 3,
    subjectGroup: math,
    name: "Mathematics",
    hasLab: false
};
const subjects = [kiswahili, english, biology, physics, mathematics];

const form1 = {id: 1, name: "form1"};
const form2 = {id: 2, name: "form2"};
const streams = [form1, form2];

const kevin = {id: 1, name: "kevin"};
const stephen = {id: 2, name: "stephen"};
const liz = {id: 3, name: "liz"};
const peter = {id: 4, name: "peter"};
const teachers = [kevin, stephen, liz, peter];

const PL1 = {id: 1, subject_id: 4, name: "PL1", subject: physics};
const PL2 = {id: 2, subject_id: 3, name: "BL1", subject: biology};
const rooms = [PL1, PL2];

const periods = [
    {id: 1, from: "8:00", to: "9:00", toBreak: false},
    {id: 2, from: "9:00", to: "9:00", toBreak: false},
    {id: 3, from: "10:00", to: "11:00", toBreak: true},
    {id: 4, from: "11:00", to: "12:00", toBreak: false},
    {id: 5, from: "12:00", to: "13:00", toBreak: false},
    {id: 6, from: "13:00", to: "14:00", toBreak: true},
    {id: 7, from: "14:00", to: "15:00", toBreak: false},
    {id: 8, from: "15:00", to: "16:00", toBreak: false},
    {id: 9, from: "16:00", to: "17:00", toBreak: true},
];

const allocations = [
    {
        id: 1,
        stream_id: 1,
        subject_id: 1,
        teacher_id: 1,
        stream: form1,
        subject: kiswahili,
        teacher: kevin
    },
    {
        id: 2,
        stream_id: 1,
        subject_id: 2,
        teacher_id: 2,
        stream: form1,
        subject: english,
        teacher: stephen
    },
    {
        id: 3,
        stream_id: 1,
        subject_id: 3,
        teacher_id: 3,
        stream: form1,
        subject: biology,
        teacher: liz
    },
    {
        id: 4,
        stream_id: 1,
        subject_id: 4,
        teacher_id: 4,
        stream: form1,
        subject: physics,
        teacher: peter
    },
    {
        id: 5,
        stream_id: 1,
        subject_id: 5,
        teacher_id: 1,
        stream: form1,
        subject: mathematics,
        teacher: kevin
    },
    {
        id: 6,
        stream_id: 2,
        subject_id: 1,
        teacher_id: 2,
        stream: form2,
        subject: kiswahili,
        teacher: stephen
    },
    {
        id: 7,
        stream_id: 2,
        subject_id: 2,
        teacher_id: 3,
        stream: form2,
        subject: english,
        teacher: liz
    },
    {
        id: 8,
        stream_id: 2,
        subject_id: 3,
        teacher_id: 4,
        stream: form2,
        subject: biology,
        teacher: peter
    },
    {
        id: 9,
        stream_id: 2,
        subject_id: 4,
        teacher_id: 4,
        stream: form2,
        subject: physics,
        teacher: peter
    },
    {
        id: 10,
        stream_id: 2,
        subject_id: 5,
        teacher_id: 1,
        stream: form2,
        subject: mathematics,
        teacher: kevin
    },
];

const data = {
    subjectGroups,
    subjects,
    streams,
    teachers,
    rooms,
    periods,
    allocations
};

const axios = require('axios');
axios.post('http://localhost:8080/', data)
    .then(data => {
        console.log(data.data);
        const allocations = data.data;
        allocations.forEach(allocation => {
            console.log(allocation.stream.name, allocation.subject.name);
            console.log("Periods:");
            console.log(allocation.periods);
            console.log("Labs:");
            console.log(allocation.room);
            console.log("\n\n")
        })
    })
    .catch(error => {
        console.error(error);
    });
