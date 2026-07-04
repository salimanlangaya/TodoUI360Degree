import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiConstants } from '../constants/api.constants';
import { CreateTodoRequest } from '../../models/create-todo-request';
import { ServiceResponse } from '../../models/service-response';
import { TodoResponse } from '../../models/todo-response';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${ApiConstants.BaseUrl}/todo`;

  getAll(): Observable<ServiceResponse<TodoResponse[]>> {
    return this.http.get<ServiceResponse<TodoResponse[]>>(this.apiUrl);
  }

  create(request: CreateTodoRequest): Observable<ServiceResponse<TodoResponse>> {
    return this.http.post<ServiceResponse<TodoResponse>>(this.apiUrl, request);
  }

  delete(id: string): Observable<ServiceResponse<boolean>> {
    return this.http.delete<ServiceResponse<boolean>>(`${this.apiUrl}/${id}`);
  }

}