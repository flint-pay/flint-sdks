import { d61 as c0, d171 as c1, d907 as c2, d1665 as c3, d74 as c4, d1835 as c5, d2275 as c6, d60 as c7, d1806 as c8, d2342 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1665 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1665;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["InvoiceLineItem"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec16"]:c7(),["SignedMoney"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
