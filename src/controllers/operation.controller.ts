import { HttpException } from '@/exceptions/HttpException';
import { StartProcessPostInterface } from '@/interfaces/startProcessPost.interface';
import { Columns } from '@/models/columns.model';
import { ColumnsMapper } from '@/models/columnsMapper.model';
import { Oprations } from '@/models/oprations.model';
import { Body, Controller, Get, HttpCode, Post, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { getManager, getRepository } from 'typeorm';

@Controller()
export class OprationsController {
  @Get('/oprations')
  async getColumnsOprations() {
    const operation = getRepository(Oprations);
    console.log(operation);
    const colums = await operation.find();
    return colums || [];
  }

  @Post('/oprations')
  @HttpCode(201)
  //   @UseBefore(validationMiddleware(CreateUserDto, 'body'))
  @OpenAPI({ summary: 'Created a new operation' })
  async createUser(@Body() operationData: any) {
    try {
      const operation = new Oprations();
      operation.code = operationData.code;
      operation.name = operationData.name;
      const data = await getRepository(Oprations).save(operation);
      return { data: data, message: 'created sucessfuly' };
    } catch (e) {
      throw new HttpException(400, 'Error while add operation');
    }
  }
}
