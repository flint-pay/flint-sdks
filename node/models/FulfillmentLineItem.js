import { d798 as c0, d74 as c1, d1833 as c2, d2340 as c3 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d798 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d798;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentLineItem"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifier"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
