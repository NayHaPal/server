import { HttpException } from '@/exceptions/HttpException';
import { Columns } from '@/models/columns.model';
import { ColumnsMapper } from '@/models/columnsMapper.model';
import { Oprations } from '@/models/oprations.model';
import { Body, Controller, Get, HttpCode, Post } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { getManager, getRepository } from 'typeorm';

@Controller()
export class ColumnsController {
  @Get('/columns')
  async getColumns() {
    const columns = getRepository(Columns);
    console.log(columns);
    const colums = await columns.find();
    return colums || [];
  }

  @Get('/columnsMapper')
  async getColumnsMaper() {
    const columns = getRepository(ColumnsMapper);
    console.log(columns);
    const colums = await columns.find();
    return colums || [];
  }

  @Post('/columns')
  @HttpCode(201)
  //   @UseBefore(validationMiddleware(CreateUserDto, 'body'))
  @OpenAPI({ summary: 'Created a new operation' })
  async createUser(@Body() operationData: any) {
    try {
      const mapper = new ColumnsMapper();
      mapper.name = operationData.name;
      const data = await getRepository(ColumnsMapper).save(mapper);
      return { data: data, message: 'created sucessfuly' };
    } catch (e) {
      throw new HttpException(400, 'Error while add mapper');
    }
  }
}
