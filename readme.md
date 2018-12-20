# MyCart

Program untuk menambahkan belanjaan ke keranjang belanja

#Fungsionalitas
- Mendapatkan total harga
- Menambahkan item ke cart
- Menghapus item dari cart
- Mendapatkan total harga dengan diskon

# Data

## LineItem

```js
interface LineItem {
    id : string;
    title : string;
    price : number;
    qty : number;
}
```