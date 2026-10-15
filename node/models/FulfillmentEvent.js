import { d42 as c0, d793 as c1, d323 as c2, d2056 as c3, d2340 as c4, d92 as c5, d2034 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d793 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d793;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec17"]:c5(),["SignedMoney"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentEvent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
