import { d14 as c0, d16 as c1, d74 as c2, d1786 as c3, d1785 as c4, d2121 as c5, d2122 as c6, d13 as c7, d12 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d16 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d16;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKey"]:c0(),["APIKeyResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
