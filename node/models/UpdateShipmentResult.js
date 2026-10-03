import { d42 as c0, d74 as c1, d1996 as c2, d2233 as c3, d2283 as c4, d96 as c5, d767 as c6, d1806 as c7, d2472 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2472 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2472;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PricingAmounts"]:c2(),["ReturnShipmentLineItemAllocation"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec26"]:c5(),["Shipment"]:c6(),["SignedMoney"]:c7(),["UpdateShipmentResult"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
