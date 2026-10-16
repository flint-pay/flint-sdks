import { d42 as c0, d793 as c1, d803 as c2, d323 as c3, d766 as c4, d1931 as c5, d1933 as c6, d2056 as c7, d2289 as c8, d2340 as c9, d92 as c10, d802 as c11, d43 as c12, d2343 as c13, d2344 as c14, d2034 as c15 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1933 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1933;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PackageStatusUpdate"]:c5(),["PackageStatusUpdateResult"]:c6(),["PricingAmounts"]:c7(),["ReturnShipmentLineItemAllocation"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec17"]:c10(),["SharedCodec233"]:c11(),["SharedCodec5"]:c12(),["ShippingDimensions"]:c13(),["ShippingWeight"]:c14(),["SignedMoney"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageStatusUpdateResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
