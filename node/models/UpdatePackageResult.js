import { d42 as c0, d792 as c1, d802 as c2, d74 as c3, d766 as c4, d1993 as c5, d2230 as c6, d2280 as c7, d801 as c8, d96 as c9, d43 as c10, d2283 as c11, d2284 as c12, d1804 as c13, d2429 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2429 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec246"]:c8(),["SharedCodec26"]:c9(),["SharedCodec7"]:c10(),["ShippingDimensions"]:c11(),["ShippingWeight"]:c12(),["SignedMoney"]:c13(),["UpdatePackageResult"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
