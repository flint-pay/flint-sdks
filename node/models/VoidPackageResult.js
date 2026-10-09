import { d42 as c0, d783 as c1, d793 as c2, d323 as c3, d756 as c4, d2039 as c5, d2273 as c6, d2324 as c7, d92 as c8, d792 as c9, d43 as c10, d2327 as c11, d2328 as c12, d2017 as c13, d2565 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2565 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec17"]:c8(),["SharedCodec227"]:c9(),["SharedCodec5"]:c10(),["ShippingDimensions"]:c11(),["ShippingWeight"]:c12(),["SignedMoney"]:c13(),["VoidPackageResult"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
