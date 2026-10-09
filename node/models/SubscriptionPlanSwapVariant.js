import { d889 as c0, d323 as c1, d2318 as c2, d2387 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2387 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["SelectedProductOption"]:c2(),["SubscriptionPlanSwapVariant"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanSwapVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
