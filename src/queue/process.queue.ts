import { BullQueueEvents, OnQueueActive, OnQueueEvent, Process, Processor } from '@nestjs/bull';
import { DoneCallback, Job } from 'bull';
import { queueProcess } from '../connection/bull.queue.connection';

@Processor()
export class MyQueue {
  private readonly logger = queueProcess;

  constructor(private readonly service: any) {}

  @Process({ name: 'twice' })
  processTwice(job: Job<number>) {
    return this.service.twice(job.data);
  }

  @Process({ name: 'thrice' })
  processThrice(job: Job<number>, callback: DoneCallback) {
    callback(null, this.service.thrice(job.data));
  }

  @OnQueueActive()
  onActive(job: Job) {
    // this.logger.log(`Processing job ${job.id} of type ${job.name} with data ${job.data}...`);
  }

  @OnQueueEvent(BullQueueEvents.COMPLETED)
  onCompleted(job: Job) {
    // this.logger.log(`Completed job ${job.id} of type ${job.name} with result ${job.returnvalue}`);
  }
}
