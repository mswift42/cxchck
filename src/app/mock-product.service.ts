import { Injectable } from '@angular/core';
import { Product} from './product';

@Injectable()
export class MockProductService {
  private _mockProducts: Product[] = [
    new Product(
      'Huawei W1 Stainless Steel Watch With Black Leather Strap, B',
      'https://uk.webuy.com/product_images/Electronics/Wearables/SWEAHUAW1SCLB_s.jpg',
      '£110.00',
      '',
      'https://uk.webuy.com/product.php?sku=SWEAHUAW1SCLB'
    ),
    new Product(
      'Huawei Mate S 32GB Titanium Grey, Unlocked B',
      'https://uk.webuy.com/product_images/Phones/Phones Android/SHUAMATSTGUNLB_s.jpg',
      '£150.00',
      "",
      'https://uk.webuy.com/product.php?sku=SHUAMATSTGUNLB'
    ),
    new Product(
      'Huawei MediaPad T3 8.0 16GB, O2 A',
      'https://uk.webuy.com/product_images/Computing/Tablets Android/STABHUAKOBLO916O2A_s.jpg',
      '£98.00',
      '',
      'https://uk.webuy.com/product.php?sku=STABHUAKOBLO916O2A',
    ),
    new Product(
      'Huawei Ascend Y300, Unlocked C',
      'https://uk.webuy.com/product_images/Phones/Phones Android/SHUAY300UNLC_s.jpg',
      '£52.00',
      '',
      'https://uk.webuy.com/product.php?sku=SHUAY300UNLC'
    ),
    new Product(
      'Huawei P9 Plus VIE-L09 64GB Quartz Grey, Vodafone B',
      'https://uk.webuy.com/product_images/Phones/Phones Android/SHUAY300UNLC_s.jpg',
      '£195.00',
      '',
      'https://uk.webuy.com/product.php?sku=SHUAVIEL0964GQGVODB',
    ),
    new Product(
      'Huawei Ascend Y3, Unlocked C',
      'https://uk.webuy.com/product_images/Phones/Phones Android/SHUAASCY3UNLC_s.jpg',
      '£50.00',
      '',
      'https://uk.webuy.com/product.php?sku=SHUAASCY3UNLC'
    ),
    new Product(
      'Huawei Honor 7X 64GB Black, Unlocked B',
      'https://uk.webuy.com/product_images/Phones/Phones Android/SHUAHON7X64GBB_s.jpg',
      '£200.00',
      '',
      'https://uk.webuy.com/product.php?sku=SHUAHON7X64GBB'
    )
  ];


  get mockProducts(): Product[] {
    return this._mockProducts;
  }

  constructor() { }

}
