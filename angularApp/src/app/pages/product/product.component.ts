import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IProduct, ProductsService} from "../../services/products.service";
import {TelegramService} from "../../services/telegram.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const id = this.route.snapshot.paramMap.get('id')
    this.product = this.products.getById(id)
    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.router.navigate(['/'])
  }
  ngOnInit(): void {
    this.telegram.BackButton.show()
    this.telegram.BackButton.onClick(this.goBack)
  }
  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack)
  }
}
