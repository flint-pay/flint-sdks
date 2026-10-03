import { d42 as c0, d74 as c1, d1993 as c2, d2230 as c3, d2280 as c4, d96 as c5, d765 as c6, d1804 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d765 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PricingAmounts"]:c2(),["ReturnShipmentLineItemAllocation"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec26"]:c5(),["Shipment"]:c6(),["SignedMoney"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShipment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
