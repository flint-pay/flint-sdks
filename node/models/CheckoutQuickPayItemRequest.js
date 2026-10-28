import { d3106 as c0 } from '../descriptors/data/122.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3251 as c2 } from '../descriptors/data/130.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3106 as d3106 } from '../descriptors/data/122.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3106;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutQuickPayItemRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
