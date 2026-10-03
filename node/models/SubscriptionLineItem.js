import { d61 as c0, d171 as c1, d907 as c2, d74 as c3, d1835 as c4, d2275 as c5, d60 as c6, d2303 as c7, d2342 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2303 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec16"]:c6(),["SubscriptionLineItem"]:c7(),["TextModifierRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
