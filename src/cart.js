/**
 * @typedef LineItem
 * @property {string} id 
 * @property {string} title
 * @property {number} qty
 * @property {number} price
 */

/** 
 * @param  {Array<LineItem>} lineItems 
 * @return {Array<LineItem>}
 */
function total(lineItems){
    return lineItems.reduce(function (accumulation, element){
        return accumulation + (element.qty * element.price)
    }, 0);
    // console.log(lineItems);
}

/**
 * @param  {LineItem[]} lineItems 
 * @param  {LineItem}   item
 * @return {LineItem[]}
 */
function addItem (lineItems, item) {
  var isInLineItems = Boolean(lineItems.find(function (lineItem) {
    return lineItem.id === item.id;
  }));

  if (!isInLineItems) {
    return lineItems.concat(item);
  }

  return lineItems.map(function (lineItem) {
      if (lineItem.id === item.id) {
          // qty nya di update
          const newQty = lineItem.qty + item.qty
          return Object.assign({}, lineItem, { qty: newQty });
      }

      return lineItem;
  });
}

/**
 * Update price dari sebuah item di line items.
 * @param  {LineItem[]} lineItems
 * @param  {object} data
 * @param  {string} data.id     Id dari item yang ingin di update
 * @param  {number} data.price  harga baru
 * @return {LineItem[]}
 */
function updatePrice (lineItems, data) {
    var itemIdInQuestion = data.id;
    var newPrice = data.price; // new price

    return lineItems.map(function (lineItem) {
        if (lineItem.id === itemIdInQuestion) {
            return Object.assign({}, lineItem, { price: newPrice });
        }

        return lineItem;        
    });
}

function removeItem(){

}
module.exports = {
    total: total,
    addItem: addItem,
    updatePrice: updatePrice,
};