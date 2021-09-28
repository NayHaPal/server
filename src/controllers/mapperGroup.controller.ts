import { MapperGroup } from '@/models/MapperGroup.model';
import { Controller, Get } from 'routing-controllers';
import { getRepository } from 'typeorm';

@Controller()
export class MapperGroupController {
  @Get('/mapperGroup')
  async getColumnsOprations() {
    const operation = getRepository(MapperGroup);
    console.log(operation);
    const colums = await operation.find();
    return colums || [];
  }
}
