import { survey } from '../shared/_models/survey.model'
import { question } from '../shared/_models/ques.model'
import { data } from '../shared/_models/data.model'

export class surveydata {
    surveys: survey[] = [{
        "topicId": "1001",
        "topicName": "Early Childhood Care & Education (ECCE)",
        "data": [
            {
                "ref": "1.3",
                "desc": "A National Curricular and Pedagogical Framework for Early Childhood Care and Education (NCPFECCE)",
                "questions": [
                    {
                        "question": "Present status in KA",
                        "options": [
                            { q: "Satisfactory", v: false },
                            { q: "Needs revamp", v: false },
                            { q: "New program to be impl", v: false }
                        ],
                        "textAnswer": "User Text answer",
                        "allowTextAnswer": false
                    },
                    {
                        "question": "Nature of Implications",
                        "options": [
                            { q: "Administrative", v: false },
                            { q: "Pedagogical", v: false },
                            { q: "Other", v: false }
                        ],
                        "textAnswer": "User Text answer",
                        "allowTextAnswer": true
                    },
                    {
                        "question": "Implementation Timeline",
                        "options": [
                            { q: "Short term", v: false },
                            { q: "Long term", v: false }
                        ],
                        "textAnswer": "user text Answer",
                        "allowTextAnswer": true
                    }
                ]
            },
            {
                "ref": "1.4",
                "desc": "Special attention and priority will be given to districts and locations",
                "questions": [
                    {
                        "question": "Present status in KA",
                        "options": [
                            { q: "Satisfactory", v: false },
                            { q: "Needs revamp", v: false },
                            { q: "New program to be impl", v: false }
                        ],
                        "textAnswer": "User Text answer",
                        "allowTextAnswer": false
                    },
                    {
                        "question": "Nature of Implications",
                        "options": [
                            { q: "Administrative", v: false },
                            { q: "Pedagogical", v: false },
                            { q: "Other", v: false }
                        ],
                        "textAnswer": "User Text answer",
                        "allowTextAnswer": true
                    },
                    {
                        "question": "Implementation Timeline",
                        "options": [
                            { q: "Short term", v: false },
                            { q: "Long term", v: false }
                        ],
                        "textAnswer": "user text Answer",
                        "allowTextAnswer": true
                    }
                ]
            }
        ]
    }]


    getsurvey(){
        return this.surveys;
    }

    getquestions(){
        var surveyq:object[]=[];
        for (let d of this.surveys[0].data)
        {
            for(let q of d.questions)
            {
                let oneques:object={};
                oneques["question"]=q.question;
                surveyq.push(oneques);
            }

            break;
        }
        return surveyq;
    }
}

