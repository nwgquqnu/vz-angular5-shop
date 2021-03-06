import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CartService } from '../services/cart.service';
import { LocalStorageService } from '../services/local-storage.service';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { CartRoutingModule, cartRouterComponents } from './cart-routing.module';
import { OrderComponent } from './order/order.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [cartRouterComponents, CartItemComponent],
  exports: [CartNotificationComponent],
  providers: [CartService, LocalStorageService, OrderService]
})
export class CartModule { }
