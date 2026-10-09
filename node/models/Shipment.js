import { d42 as c0, d323 as c1, d2039 as c2, d2273 as c3, d2324 as c4, d92 as c5, d755 as c6, d2017 as c7 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d755 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d755;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PricingAmounts"]:c2(),["ReturnShipmentLineItemAllocation"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec17"]:c5(),["Shipment"]:c6(),["SignedMoney"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShipment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
