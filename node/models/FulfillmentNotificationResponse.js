import { d42 as c0, d803 as c1, d805 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2056 as c6, d2178 as c7, d2179 as c8, d2340 as c9, d14 as c10, d802 as c11, d1822 as c12, d43 as c13, d2034 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d805 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d805;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentNotification"]:c1(),["FulfillmentNotificationResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec233"]:c11(),["SharedCodec467"]:c12(),["SharedCodec5"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentNotificationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
