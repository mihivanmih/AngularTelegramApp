import { Injectable } from '@angular/core'

export type ProductType = 'technic' | 'city' | 'minecraft'

export interface IProduct {
  id: string
  text: string
  image: string
  type: ProductType
}

export const products: IProduct[] = [
  {
    id: '1',
    text: 'Конструктор LEGO Technic Автомобиль Bolide, 905 деталей, 9+',
    image: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6624798517.jpg',
    type: 'technic'
  },
  {
    id: '2',
    text: 'Конструктор LEGO Technic 42098 Car Transporter',
    image: 'https://ir.ozone.ru/s3/multimedia-4/wc1000/6331851604.jpg',
    type: 'technic'
  },
  {
    id: '3',
    text: 'Конструктор LEGO City Мусоровоз, 261 деталей, 5+',
    image: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6602960494.jpg',
    type: 'city'
  },
  {
    id: '4',
    text: 'Конструктор LEGO City Fire Пожарная часть и пожарная машина, 153 деталей, 4+',
    image: 'https://ir.ozone.ru/s3/multimedia-5/wc1000/6602960441.jpg',
    type: 'city'
  },
  {
    id: '5',
    text: 'Конструктор LEGO Minecraft Тыквенная ферма, 257 деталей, 8+',
    image: 'https://ir.ozone.ru/s3/multimedia-8/wc1000/6777769820.jpg',
    type: 'minecraft'
  },
  {
    id: '6',
    text: 'Конструктор LEGO Minecraft Тыквенная ферма, 257 деталей, 8+',
    image: 'https://ir.ozone.ru/s3/multimedia-8/wc1000/6777769820.jpg',
    type: 'minecraft'
  },
  {
    id: '7',
    text: 'Конструктор LEGO City Мусоровоз, 261 деталей, 5+',
    image: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6602960494.jpg',
    type: 'city'
  },
  {
    id: '8',
    text: 'Конструктор LEGO Technic John Deere 9620R 4WD Tractor, 390 деталей, 8+',
    image: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6563976049.jpg',
    type: 'technic'
  },
  {
    id: '9',
    text: 'Конструктор LEGO Minecraft Дом аксолотля, 242 деталей, 7+',
    image: 'https://ir.ozone.ru/s3/multimedia-r/wc1000/6796118139.jpg',
    type: 'minecraft'
  }
]

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  readonly products: IProduct[] = products
 getById(id: string) {
    return this.products.find((p) => p.id === id)
 }

 get byGroup() {
    return this.products.reduce((group, prod) => {
      if(!group[prod.type]) {
        group[prod.type] = []
      }
      group[prod.type].push(prod)
      return group
    }, {})
 }
}
