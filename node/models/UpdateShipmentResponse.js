import { d42 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1993 as c4, d2118 as c5, d2119 as c6, d2230 as c7, d2280 as c8, d96 as c9, d765 as c10, d1804 as c11, d2468 as c12, d2469 as c13 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2468 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PricingAmounts"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec26"]:c9(),["Shipment"]:c10(),["SignedMoney"]:c11(),["UpdateShipmentResponse"]:c12(),["UpdateShipmentResult"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
