import { d42 as c0, d323 as c1, d2056 as c2, d2340 as c3, d2034 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d42 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d42;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PricingAmounts"]:c2(),["SettlementAmounts"]:c3(),["SignedMoney"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedOrderSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
