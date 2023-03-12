import react from 'react'
import { AnswerObject } from '../App';
// Style
import { ButtonWrapper, Wrapper } from '../quetionCard.style';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number; 
    totalQuestion: number; 
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestion }) => (
    
    
<Wrapper>
   <p className='number'>
    Question: { questionNr } / { totalQuestion }
   </p>
    <p dangerouslySetInnerHTML={{__html: question }} />
    <div>
        {answers.map(answers =>(
            <ButtonWrapper 
            key={answers}
            correct={userAnswer?.corrctAnswer === answers}
            userClicked={userAnswer?.answers === answers}
            >
                <button disabled={userAnswer ? true : false } value={answers} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answers }} />
                </button>
            </ButtonWrapper>
        ))}
    </div>
</Wrapper>
);

export default QuestionCard;