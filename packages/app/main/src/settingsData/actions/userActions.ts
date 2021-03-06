//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { User } from '@bfemulator/sdk-shared';
import { Action } from 'redux';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const ADD_USERS = 'ADD_USERS';
export const REMOVE_USERS = 'REMOVE_USERS';

export interface UserAction<P> extends Action {
  type: UserActionType;
  state: P;
}

export interface UserPayload {
  user?: User;
  users?: User[];
}

export declare type UserActionType = 'SET_CURRENT_USER' | 'ADD_USERS' | 'REMOVE_USERS';

export function addUsers(users: User[]): UserAction<UserPayload> {
  return {
    type: ADD_USERS,
    state: { users },
  };
}

export function removeUsers(users: User[]): UserAction<UserPayload> {
  return {
    type: REMOVE_USERS,
    state: { users },
  };
}

export function setCurrentUser(user: User): UserAction<UserPayload> {
  return {
    type: SET_CURRENT_USER,
    state: { user },
  };
}
