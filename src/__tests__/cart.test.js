var cart = require('../cart');

describe('Module Cart', function (){
    test('total should return correct value', function (){
        var lineItems = [
            {qty: 3, price: 50},
            {qty: 1, price: 40},
        ];
        
        var result = cart.total(lineItems);
        
        expect(result).toBe(190);

        var result2 = cart.total([]);

        expect(result2).toBe(0);
    });

    test('able to add new item', function () {
        var lineItems = [
            {id: 'item-1', qty: 2, price: 10},
            {id: 'item-2', qty: 3, price: 20},
        ];

        lineItems = cart.addItem(lineItems, {
            id: 'item-3',
            price: 50,
            qty: 1,
        })

        expect(lineItems.length).toBe(3);
        expect(lineItems[2].id).toBe('item-3');
        expect(lineItems[2].price).toBe(50);
        expect(lineItems[2].qty).toBe(1);
    })

    test('able to add existing item qty', function () {
        var lineItems = [
            {id: 'item-1', qty: 2, price: 10},
            {id: 'item-2', qty: 3, price: 20},
        ];

        lineItems = cart.addItem(lineItems, {
            id: 'item-1',
            price: 10,
            qty: 5,
        })

        expect(lineItems.length).toBe(2);
        expect(lineItems[0].id).toBe('item-1');
        expect(lineItems[0].price).toBe(10);
        expect(lineItems[0].qty).toBe(7);
    })

    test('able to update existing item price', function () {
        var lineItems = [
            {id: 'item-99', qty: 1, price: 90}
        ]

        lineItems = cart.updatePrice(lineItems, {
          id: 'item-99',
          price: 120
        });

        expect(lineItems.length).toBe(1);
        expect(lineItems[0].id).toBe('item-99');
        expect(lineItems[0].price).toBe(120);
        expect(lineItems[0].qty).toBe(1);
    })

    test('able to remove item from line item', function () {
        var lineItems = [
            {id: 'item-1', qty: 3, price: 10},
            {id: 'item-2', qty: 2, price: 20},
            {id: 'item-3', qty: 6, price: 30},
        ]

        lineItems = cart.removeItem(lineItems, 'item-1');

        expect(lineItems.length).toBe(2);
        expect(lineItems[0].id).toBe('item-2');
        expect(lineItems[0].price).toBe(20);
        expect(lineItems[0].qty).toBe(2);
        expect(lineItems[1].id).toBe('item-3');
        expect(lineItems[1].price).toBe(30);
        expect(lineItems[1].qty).toBe(6);
    })

});