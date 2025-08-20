const sampleData =[{
                        id:'01',
                        question:'Sample question for short answer type questions',
                        answerType:'short-answer',
                        options:{
                            mcqOpt1:'',
                            mcqOpt2:'',
                            mcqOpt3:'',
                            mcqOpt4:'',
                        }
                },{
                        id:'02',
                        question:'Sample question for MCQ types questions',
                        answerType:'MCQ',
                        options:{
                            mcqOpt1:'good',
                            mcqOpt2:'bad',
                            mcqOpt3:'ugly',
                            mcqOpt4:'worst',
                        }
                },{
                        id:'03',
                        question:'Sample question for True or False',
                        answerType:'true/false',
                        options:{
                            mcqOpt1:'',
                            mcqOpt2:'',
                            mcqOpt3:'',
                            mcqOpt4:'',
                        }
                }]
const sampleName = 'Sample Form'
const sampleDEscription = "This is sample data for demonstration you can create your own form by Editing the form"

export {sampleDEscription,sampleName,sampleData}