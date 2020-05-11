export interface questionOption {
    Question: {
        _id: string,
        survey_id: string,
        question: string,
        question_type: string,
        __v: number
    },
    Options: [
        {
            option_label: string,
            _id: string,
            question_id: string,
            __v: number
        }
    ]
}