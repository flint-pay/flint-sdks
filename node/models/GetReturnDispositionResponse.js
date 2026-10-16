import { d841 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2178 as c4, d2179 as c5, d2181 as c6, d2184 as c7, d2186 as c8, d14 as c9, d1822 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d841 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d841;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnDispositionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RetryReturnDispositionResponse"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["SharedCodec1"]:c9(),["SharedCodec467"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
