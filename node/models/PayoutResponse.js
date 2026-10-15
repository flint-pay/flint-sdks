import { d777 as c0, d778 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2038 as c5, d2045 as c6, d2048 as c7, d2178 as c8, d2179 as c9, d14 as c10, d860 as c11, d1822 as c12, d2035 as c13, d2036 as c14, d2037 as c15, d2034 as c16 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2045 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2045;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["PayoutTraceID"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec248"]:c11(),["SharedCodec467"]:c12(),["SharedCodec509"]:c13(),["SharedCodec510"]:c14(),["SharedCodec511"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
