import { d3106 as c0 } from '../descriptors/data/122.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3251 as c2 } from '../descriptors/data/130.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3106 as d3106 } from '../descriptors/data/122.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3106;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutQuickPayItemRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
