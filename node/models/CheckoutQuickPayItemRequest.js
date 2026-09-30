import { d192 as c0, d69 as c1, d1687 as c2 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d192 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutQuickPayItemRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
