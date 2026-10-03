import { d42 as c0, d74 as c1, d766 as c2, d1993 as c3, d2230 as c4, d2280 as c5, d96 as c6, d2283 as c7, d2284 as c8, d1804 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d766 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["Package"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec26"]:c6(),["ShippingDimensions"]:c7(),["ShippingWeight"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackage(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
