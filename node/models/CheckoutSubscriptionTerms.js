import { d197 as c0, d198 as c1, d323 as c2, d2365 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d198 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionRecurringShipping"]:c0(),["CheckoutSubscriptionTerms"]:c1(),["MoneyValue"]:c2(),["SubscriptionIntervalOption"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTerms(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
