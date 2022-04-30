import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUpdate} from '../viewOrders/update.model'

@Injectable()

export class OrderService {

    private orderUrl = "http://localhost:8700/orders"

    constructor(private http:HttpClient){}

    postOrder(order:any[]): Observable<any[]>{
        return this.http.post<any[]>(this.orderUrl, order)  
    }

    updateOrder(data:IUpdate):Observable<IUpdate[]>{
        return this.http.patch<IUpdate[]>(`${this.orderUrl}/${data.id}`,data)
    }

    getOrder(): Observable<any[]>{
        return this.http.get<any[]>(this.orderUrl)  
    }
}