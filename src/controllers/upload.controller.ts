import { Body, Controller, Get, Param, Post, QueryParam, QueryParams, UploadedFile } from 'routing-controllers';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import md5 from 'md5';
import { dirname } from 'path/posix';

@Controller()
export class UploadController {
  @Get('/uploadFiles')
  index() {
    return 'Yes 5';
  }

  @Post('/upload')
  uploadFiles(
    @Body() body: any,
    @UploadedFile('file') Chunk: any,
    @QueryParam('name') name: string,
    @QueryParam('currentChunkIndex') currentChunkIndex: string,
    @QueryParam('totalChunks') totalChunks: string,
  ) {
    const firstChunk = parseInt(currentChunkIndex) === 0;
    const lastChunk = parseInt(currentChunkIndex) === parseInt(totalChunks) - 1;
    const ext = name.split('.').pop();
    const data = body.toString().split(',')[1];
    const buffer = new Buffer(data, 'base64');
    const tmpFilename = 'tmp_' + md5(name + body.ip) + '.' + ext;
    if (firstChunk && fs.existsSync('./uploads/' + tmpFilename)) {
      fs.unlinkSync('./uploads/' + tmpFilename);
    }
    fs.appendFileSync('./uploads/' + tmpFilename, buffer);
    if (lastChunk) {
      const finalFilename = md5(Date.now()).substr(0, 6) + '.' + ext;
      fs.renameSync('./uploads/' + tmpFilename, './uploads/' + finalFilename);
      return { finalFilename };
    } else {
      return 'ok';
    }
    // return { FileName: 'yes' };
  }
}
