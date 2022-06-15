import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { response: string } {
    return this.appService.getHello();
  }

  @Get('check-question-one')
  solveQuestionOne(@Query('answer') answer: string): {
    passed: boolean;
    nextQuestion: string | undefined;
  } {
    console.log(answer);
    if (!answer) throw new BadRequestException('Answer is required');
    return this.appService.solveQuestionOne(answer);
  }

  @Get('check-question-two')
  solveQuestioTwo(
    @Query('answer') answer: string,
    @Query('answerOne') answerOne: string | undefined,
  ): {
    passed: boolean;
    nextQuestion: string | undefined;
  } {
    if (!answer || !answerOne)
      throw new BadRequestException('All answers are required');
    return this.appService.solveQuestionTwo(answer, answerOne);
  }

  @Get('check-question-three')
  solveQuestioThree(
    @Query('answer') answer: string,
    @Query('answerOne') answerOne: string | undefined,
    @Query('answerTwo') answerTwo: string | undefined,
  ): {
    passed: boolean;
    url: string | undefined;
  } {
    console.log(answer, answerOne, answerTwo);
    if (!answer || !answerOne || !answerTwo)
      throw new BadRequestException('All answers are required');

    return this.appService.solveQuestionThree(answer, answerOne, answerTwo);
  }
}
