import { d45 as c0, d800 as c1, d810 as c2, d77 as c3, d1797 as c4, d1796 as c5, d773 as c6, d2008 as c7, d2131 as c8, d2132 as c9, d2243 as c10, d2294 as c11, d14 as c12, d809 as c13, d99 as c14, d1795 as c15, d46 as c16, d2297 as c17, d2298 as c18, d223 as c19, d2443 as c20, d2444 as c21 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2443 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec253"]:c13(),["SharedCodec27"]:c14(),["SharedCodec485"]:c15(),["SharedCodec8"]:c16(),["ShippingDimensions"]:c17(),["ShippingWeight"]:c18(),["SignedMoney"]:c19(),["UpdatePackageResponse"]:c20(),["UpdatePackageResult"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
