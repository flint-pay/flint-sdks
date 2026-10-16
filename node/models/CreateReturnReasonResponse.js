import { d450 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2178 as c4, d2179 as c5, d2230 as c6, d14 as c7, d1822 as c8, d2551 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d450 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReasonResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnReason"]:c6(),["SharedCodec1"]:c7(),["SharedCodec467"]:c8(),["UpdateReturnReasonResponse"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReasonResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
