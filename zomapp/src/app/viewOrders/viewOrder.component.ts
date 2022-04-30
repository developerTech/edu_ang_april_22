import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { OrderService } from '../services/order.service';
import {IUpdate} from './update.model'

@Component({
    selector:'app-viewOrder',
    templateUrl:'./viewOrder.component.html',
    styleUrls:['./viewOrder.component.css']
})

export class ViewOrderComponent implements OnInit{
    
    orderId:string | null = 'oid'
    status:string | null='Success'
    date:string | null='Date'
    bank:string | null='Bank'
    orders:any[] = []

    constructor(private route: ActivatedRoute,
        private ordersService: OrderService){}
    


    ngOnInit(){
        this.orderId = this.route.snapshot.queryParamMap.get('ORDERID')
        this.status = this.route.snapshot.queryParamMap.get('status')
        this.date = this.route.snapshot.queryParamMap.get('date')
        this.bank = this.route.snapshot.queryParamMap.get('bank')
        let data = {
            id :this.orderId,
            status:this.status,
            date:this.date,
            bank:this.bank
        }
        this.ordersService.updateOrder(data)
        .subscribe((output:any[]) => {console.log('Data Posted',output)})

        this.ordersService.getOrder()
            .subscribe((data) => {this.orders = data})

    }
   
}