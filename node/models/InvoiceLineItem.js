import { d64 as c0, d172 as c1, d912 as c2, d1670 as c3, d77 as c4, d1846 as c5, d2286 as c6, d63 as c7, d223 as c8, d2354 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1670 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1670;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["InvoiceLineItem"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec17"]:c7(),["SignedMoney"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
