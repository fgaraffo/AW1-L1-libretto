'use strict';

const dayjs = require('dayjs');

function Exam(code, name, credits, date, score, laude = false) {
    this.code = code;
    this.name = name;
    this.credits = credits;
    this.score = score;
    this.laude = laude;
    this.date = date;
}

function ExamList () {
    this.list = [];

    this.add = (e) => {
        this.list.push(e);
    };

    this.find = (code) => {
        for (const c of this.list) {
            if (c.code === code) {
                return c;
            }
        }
        return undefined;
    };

    this.afterDate = (date) => {
        let v = [];
        for (let obj of this.list) {
            if (obj.date.isAfter(date))
                v.push(obj);
            }
        return v;
    };
}

const wa1 = new Exam('01KTF', 'Web Applications I', 6, dayjs('2021-06-01'), 30, true);
const sdp = new Exam('02XXX', 'System and Device Programming', 10, dayjs('2021-07-01'), 21);

const exams = new ExamList();
exams.add(wa1);
exams.add(sdp);

console.log(exams.find('01KTF'));
console.log(exams.find('031KTF'));

console.log(exams.afterDate(dayjs('2021-05-15')));

debugger;