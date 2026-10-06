import { d818 as c0, d77 as c1, d1872 as c2, d2380 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d818 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentLineItem"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifier"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
