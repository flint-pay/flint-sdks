import { d59 as c0, d61 as c1, d136 as c2, d889 as c3, d1689 as c4, d323 as c5, d1874 as c6, d2318 as c7, d2017 as c8, d2415 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1689 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["InvoiceLineItem"]:c4(),["MoneyValue"]:c5(),["OrderLineItemModifier"]:c6(),["SelectedProductOption"]:c7(),["SignedMoney"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
