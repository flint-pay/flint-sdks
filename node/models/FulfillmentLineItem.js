import { d768 as c0, d314 as c1, d1829 as c2, d2331 as c3 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d768 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d768;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentLineItem"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifier"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
