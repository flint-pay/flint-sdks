import { d509 as c0, d42 as c1, d74 as c2, d1996 as c3, d2233 as c4, d2283 as c5, d96 as c6, d767 as c7, d1806 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d509 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d509;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResult"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec26"]:c6(),["Shipment"]:c7(),["SignedMoney"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
