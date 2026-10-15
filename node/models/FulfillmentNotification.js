import { d42 as c0, d803 as c1, d323 as c2, d2056 as c3, d2340 as c4, d802 as c5, d43 as c6, d2034 as c7 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d803 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d803;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentNotification"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec233"]:c5(),["SharedCodec5"]:c6(),["SignedMoney"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentNotification(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
