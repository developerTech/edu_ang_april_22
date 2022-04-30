import {Component} from '@angular/core';
import { IOrder } from './order.model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../services/order.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector:'app-order',
    templateUrl:'./booking.component.html'
})

export class OrderComponent{  
    
    constructor(private orderPost: OrderService,
        private route: Router){}
    
    orderId = `OID${Math.floor(Math.random()*10000000)}`
    
    myOrder = new IOrder(this.orderId,'Michal','Hno12','a@a.com',9643765447,254)

    submitForm(Form: NgForm): void{
        console.log(Form.value)
        this.orderPost.postOrder(Form.value)
            .subscribe((res:any[]) => {console.log('Data Posted',res)})
        let data = Form.value
        window.location.href = `http://localhost:4000/paynow?amount=${data.cost}&orderId=${data.id}&email=${data.email}&phone=${data.phone}`;
    }
}