import { d506 as c0, d507 as c1, d42 as c2, d74 as c3, d1784 as c4, d1783 as c5, d1994 as c6, d2119 as c7, d2120 as c8, d2231 as c9, d2281 as c10, d96 as c11, d765 as c12, d1804 as c13 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d506 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResponse"]:c0(),["CreateShipmentResult"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["ReturnShipmentLineItemAllocation"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec26"]:c11(),["Shipment"]:c12(),["SignedMoney"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
