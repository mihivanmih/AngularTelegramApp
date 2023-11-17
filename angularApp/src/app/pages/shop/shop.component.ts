import {Component, inject} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import {ProductsService} from "../../services/products.service";
import {ProductComponent} from "../product/product.component";
import {ProductListComponent} from "../../cpmponents/product-list/product-list.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  telegram = inject(TelegramService)
  products = inject(ProductsService)
  constructor() {
    this.telegram.BackButton.hide()
  }
}
