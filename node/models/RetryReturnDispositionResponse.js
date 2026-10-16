import { d323 as c0, d1823 as c1, d1824 as c2, d2178 as c3, d2179 as c4, d2181 as c5, d2184 as c6, d2186 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2181 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2181;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RetryReturnDispositionResponse"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["SharedCodec1"]:c8(),["SharedCodec467"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
