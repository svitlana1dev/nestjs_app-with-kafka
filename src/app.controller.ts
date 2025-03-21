import { Controller, Get } from '@nestjs/common';
import { KafkaProducerService } from './kafka/kafka.producer';

@Controller()
export class AppController {
  constructor(private readonly kafkaProducer: KafkaProducerService) {}

  @Get('send')
  async sendMessage() {
    await this.kafkaProducer.sendMessage('test-topic', {
      message: 'Hello Kafka',
    });
    return { message: 'Message sent to Kafka' };
  }
}
