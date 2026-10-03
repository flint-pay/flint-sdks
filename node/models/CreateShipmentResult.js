import { d507 as c0, d42 as c1, d74 as c2, d1993 as c3, d2230 as c4, d2280 as c5, d96 as c6, d765 as c7, d1804 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d507 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d507;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResult"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec26"]:c6(),["Shipment"]:c7(),["SignedMoney"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
