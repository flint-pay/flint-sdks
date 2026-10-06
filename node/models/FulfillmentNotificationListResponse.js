import { d45 as c0, d822 as c1, d823 as c2, d77 as c3, d1823 as c4, d1822 as c5, d2034 as c6, d2157 as c7, d2158 as c8, d2320 as c9, d14 as c10, d821 as c11, d1821 as c12, d46 as c13, d226 as c14 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d823 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d823;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentNotification"]:c1(),["FulfillmentNotificationListResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec254"]:c11(),["SharedCodec487"]:c12(),["SharedCodec8"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentNotificationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
