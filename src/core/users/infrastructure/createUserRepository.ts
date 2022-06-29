import { amqp } from "../../../shared/rabittConnect";

import { IcreateUserRepository } from "../applications/icreateUserRepository";

export class CreateUserRepository implements IcreateUserRepository {

  async createUser(): Promise<any> {
    await amqp.channel.assertQueue('user');
    const msgs = [
      { "name": "andres", "last_name": "leal", "age": "30" }
    ]
    await amqp.channel.sendToQueue('user', Buffer.from(JSON.stringify(msgs)))

  }


}
