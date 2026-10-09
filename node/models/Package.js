import { d42 as c0, d323 as c1, d756 as c2, d2039 as c3, d2273 as c4, d2324 as c5, d92 as c6, d2327 as c7, d2328 as c8, d2017 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d756 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d756;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["Package"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec17"]:c6(),["ShippingDimensions"]:c7(),["ShippingWeight"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackage(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
