import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { response: string } {
    return { response: 'Hello World!' };
  }

  solveQuestionOne(answer: string): {
    passed: boolean;
    nextQuestion: string | undefined;
  } {
    if (answer == 'your answer here')
      return {
        passed: true,
        nextQuestion:
          'To finish the full circle, answer the following question:\nWhere are we connected?',
      };

    return { passed: false, nextQuestion: undefined };
  }

  solveQuestionTwo(
    answer: string,
    answerOne: string,
  ): {
    passed: boolean;
    nextQuestion: string | undefined;
  } {
    if (this.solveQuestionOne(answerOne).passed)
      if (answer == 'chaos')
        return {
          passed: true,
          nextQuestion: '👌❎🔟🎨on 🟦🕊, ⬆️🖼. 👈☹️🆔',
        };

    return { passed: false, nextQuestion: undefined };
  }

  solveQuestionThree(
    answer: string,
    answerOne: string,
    answerTwo: string,
  ): {
    passed: boolean;
    url: string | undefined;
  } {
    console.log(answerOne, answerTwo);
    if (this.solveQuestionTwo(answerTwo, answerOne).passed)
      if (answer == '4047')
        return {
          passed: true,
          url: 'https://a57a880c-a90d-4a78-b2d8-6efaecff4a0b.vercel.app/f24760a5-ec25-4a66-844e-1a947201493a',
        };

    return { passed: false, url: undefined };
  }
}
