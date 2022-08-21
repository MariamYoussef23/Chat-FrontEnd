export interface AuthState {
  token: string;
}

export interface ChatsState {
  chats: [];
}
export interface MessagesState {
  messages: Message[];
}


export interface User {
  id: number
  createdAt: Date
  updatedAt: Date
  firstName: string
  lastName: string
  imgURL?: string
  email: string
  password: string
}
export interface Chat {
  id: number
  chatName: string
  ChatImgURL: string
  createdAt: Date
  updatedAt: Date
  users: User[]
}

export interface Message {
  id?:number
  createdAt?: Date
  updatedAt?: Date
  user?: User
  body: string
}

export interface MessageBody{
  body: string
}