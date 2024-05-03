// chat.service.ts
import { Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from 'src/entities/chat.entity';
import { Job } from 'src/entities/job.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>
  ) {}

  async sendMessage(jobId: number, senderId: number, receiverId: number, message: string) {
    const job = await this.jobRepository.findOne({where:{jobID:jobId}});
    if (!job) {
        throw new Error('Job not found');
    }

    const { postedBy, acceptedUserID } = job;

    const senderIdNumber = senderId;
    const receiverIdNumber = receiverId;

    if (job.postedBy !== senderIdNumber && job.acceptedUserID !== senderIdNumber) {
        throw new Error('You are not authorized to send messages for this job');
    }

    if (job.postedBy !== receiverIdNumber && job.acceptedUserID !== receiverIdNumber) {
        throw new ExceptionsHandler();
    }

    // if (job.postedBy !== receiverIdNumber && job.postedBy !== receiverIdNumber) {
    //   throw new ExceptionsHandler();
    // }

    // if (job.acceptedUserID !== receiverIdNumber && job.acceptedUserID !== receiverIdNumber) {
    //   throw new ExceptionsHandler();
    // }

    const chat = new Chat();
    chat.jobId = jobId;
    chat.senderId = senderId;
    chat.receiverId = receiverId;
    chat.message = message;
    return this.chatRepository.save(chat);
}



  async getMessageHistory(jobId: number, userId: number): Promise<Chat[]> {
    return this.chatRepository.find({
      where: [
        { jobId, senderId: userId },
        { jobId, receiverId: userId }
      ]
    });
  }
}
