import { d675 as c0, d676 as c1, d680 as c2, d74 as c3, d1784 as c4, d1783 as c5, d2119 as c6, d2120 as c7 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d680 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallback"]:c0(),["DeliveryRateCallbackConfiguration"]:c1(),["DeliveryRateCallbackResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateCallbackResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
