import amqplib from 'amqplib';


class IRabbitMQ {
  public connection: any;
  public channel: any;

  constructor() {
    this.init();
  }

  async init() {
    try {
      this.connection = await amqplib.connect('amqp://guest:guest@localhost:5672')
      this.channel = await this.connection.createChannel()

    } catch (err) {
      console.error(err);
    }
  }

}

export const amqp = new IRabbitMQ();