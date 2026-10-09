import { d42 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2039 as c4, d2162 as c5, d2163 as c6, d2273 as c7, d2324 as c8, d14 as c9, d92 as c10, d1819 as c11, d755 as c12, d2326 as c13, d2017 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2326 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PricingAmounts"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec1"]:c9(),["SharedCodec17"]:c10(),["SharedCodec466"]:c11(),["Shipment"]:c12(),["ShipmentResponse"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
