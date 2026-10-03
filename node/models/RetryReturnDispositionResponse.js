import { d74 as c0, d1786 as c1, d1785 as c2, d2121 as c3, d2122 as c4, d2124 as c5, d2127 as c6, d2129 as c7 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2124 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RetryReturnDispositionResponse"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
