import { d64 as c0, d176 as c1, d926 as c2, d1695 as c3, d77 as c4, d1872 as c5, d2312 as c6, d63 as c7, d226 as c8, d2380 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1695 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["InvoiceLineItem"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec17"]:c7(),["SignedMoney"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
