import Queue from 'bull';

export const queueProcess = new Queue('excelSheetProccing', { redis: { port: 6379, host: 'localhost', password: 'nayef' } });
// Specify Redis connection using object
