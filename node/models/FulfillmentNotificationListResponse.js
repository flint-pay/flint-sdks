import { d42 as c0, d803 as c1, d804 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2056 as c6, d2178 as c7, d2179 as c8, d2340 as c9, d14 as c10, d802 as c11, d1822 as c12, d43 as c13, d2034 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d804 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentNotification"]:c1(),["FulfillmentNotificationListResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec233"]:c11(),["SharedCodec467"]:c12(),["SharedCodec5"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentNotificationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
