import { d42 as c0, d793 as c1, d803 as c2, d323 as c3, d766 as c4, d2056 as c5, d2289 as c6, d2340 as c7, d92 as c8, d802 as c9, d43 as c10, d2343 as c11, d2344 as c12, d2034 as c13, d2526 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2526 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2526;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec17"]:c8(),["SharedCodec233"]:c9(),["SharedCodec5"]:c10(),["ShippingDimensions"]:c11(),["ShippingWeight"]:c12(),["SignedMoney"]:c13(),["UpdatePackageResult"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
