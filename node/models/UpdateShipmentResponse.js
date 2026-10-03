import { d42 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1994 as c4, d2119 as c5, d2120 as c6, d2231 as c7, d2281 as c8, d96 as c9, d765 as c10, d1804 as c11, d2469 as c12, d2470 as c13 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2469 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PricingAmounts"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec26"]:c9(),["Shipment"]:c10(),["SignedMoney"]:c11(),["UpdateShipmentResponse"]:c12(),["UpdateShipmentResult"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
