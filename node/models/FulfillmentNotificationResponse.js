import { d45 as c0, d822 as c1, d824 as c2, d77 as c3, d1823 as c4, d1822 as c5, d2034 as c6, d2157 as c7, d2158 as c8, d2320 as c9, d14 as c10, d821 as c11, d1821 as c12, d46 as c13, d226 as c14 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d824 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentNotification"]:c1(),["FulfillmentNotificationResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec254"]:c11(),["SharedCodec487"]:c12(),["SharedCodec8"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentNotificationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
