import { d42 as c0, d793 as c1, d803 as c2, d323 as c3, d1823 as c4, d1824 as c5, d766 as c6, d1931 as c7, d1932 as c8, d1933 as c9, d2056 as c10, d2178 as c11, d2179 as c12, d2289 as c13, d2340 as c14, d14 as c15, d92 as c16, d802 as c17, d1822 as c18, d43 as c19, d2343 as c20, d2344 as c21, d2034 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1932 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1932;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PackageStatusUpdate"]:c7(),["PackageStatusUpdateResponse"]:c8(),["PackageStatusUpdateResult"]:c9(),["PricingAmounts"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["ReturnShipmentLineItemAllocation"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec17"]:c16(),["SharedCodec233"]:c17(),["SharedCodec467"]:c18(),["SharedCodec5"]:c19(),["ShippingDimensions"]:c20(),["ShippingWeight"]:c21(),["SignedMoney"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
