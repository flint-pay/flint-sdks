import { d42 as c0, d793 as c1, d803 as c2, d323 as c3, d1823 as c4, d1824 as c5, d766 as c6, d2056 as c7, d2178 as c8, d2179 as c9, d2289 as c10, d2340 as c11, d14 as c12, d92 as c13, d802 as c14, d1822 as c15, d43 as c16, d2343 as c17, d2344 as c18, d2034 as c19, d2580 as c20, d2581 as c21 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2580 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2580;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec17"]:c13(),["SharedCodec233"]:c14(),["SharedCodec467"]:c15(),["SharedCodec5"]:c16(),["ShippingDimensions"]:c17(),["ShippingWeight"]:c18(),["SignedMoney"]:c19(),["VoidPackageResponse"]:c20(),["VoidPackageResult"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
