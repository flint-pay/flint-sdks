import { d149 as c0, d74 as c1, d1786 as c2, d1785 as c3, d2121 as c4, d2122 as c5, d2124 as c6, d2127 as c7, d2129 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d149 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnDispositionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RetryReturnDispositionResponse"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
