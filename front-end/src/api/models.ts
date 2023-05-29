import { IntegerType } from "mongodb";

export interface Profile {
  actu?: string;
  phone?: string;
  picture?: string;
  status?: string;
}

export interface User {
  _id?: string;
  username?: string;
  password?: string;
  profile?: Profile;
}

export interface Chat {
  _id?: string;
  title?: string;
  picture?: string;
  participants?: string[];
  lastMessage?: Message;
}

export interface Message {
  id?: string;
  chatId?: string;
  content?: string;
  createdAt?: Date;
  type?: MessageType;
  ownership?: string;
  senderId?: string;
  read?: boolean;
}

// export interface Message {
//   id?: IntegerType;
//   index?: IntegerType;
//   message?: string;
//   messageid?: string;
//   msgdate?: Date;
//   msghour?: MessageType;
//   msgperson?: string;
//   name?: string;
//   number?: IntegerType;
// }

export enum MessageType {
  TEXT = "text",
  IMAGE = "image",
}
