import { d683 as c0, d684 as c1, d74 as c2, d1786 as c3, d1785 as c4, d2121 as c5, d2122 as c6 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d684 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d684;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackSigningKeyRotation"]:c0(),["DeliveryRateCallbackSigningKeyRotationResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateCallbackSigningKeyRotationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
