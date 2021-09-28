import { queueProcess } from '@/connection/bull.queue.connection';
import { HttpException } from '@/exceptions/HttpException';
import { StartProcessPostInterface } from '@/interfaces/startProcessPost.interface';
import { Columns } from '@/models/columns.model';
import { ColumnsMapper } from '@/models/columnsMapper.model';
import { Process } from '@/models/process.model';
import { Body, Controller, Get, HttpCode, Post } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { getManager, getRepository } from 'typeorm';

@Controller()
export class ProcessController {
  @Post('/process')
  @HttpCode(201)
  //   @UseBefore(validationMiddleware(CreateUserDto, 'body'))
  @OpenAPI({ summary: 'Created a new operation' })
  async addProcess(@Body() operationData: any) {
    try {
      const process = new Process();
      process.mapperObject = JSON.stringify(operationData.mapperObject);
      process.patientFile = operationData.patientFile;
      process.tretmentFile = operationData.tretmentFile;
      process.name = operationData.name;
      const data = await getRepository(Process).save(process);
      queueProcess.add(data);
      return { data: data, message: 'created sucessfuly' };
    } catch (e) {
      throw new HttpException(400, 'Error while add operation');
    }
  }

  @Post('/Process/:id')
  @HttpCode(201)
  //   @UseBefore(validationMiddleware(CreateUserDto, 'body'))
  @OpenAPI({ summary: 'Created a new operation' })
  async startProcess(@Body() operationData: any) {
    try {
      const process = new Process();
      process.mapperObject = JSON.stringify(operationData.mapperObject);
      process.patientFile = operationData.patientFile;
      process.tretmentFile = operationData.tretmentFile;
      process.name = operationData.name;
      const data = await getRepository(Process).save(process);
      queueProcess.add(data);
      return { data: data, message: 'created sucessfuly' };
    } catch (e) {
      throw new HttpException(400, 'Error while add operation');
    }
  }
}
