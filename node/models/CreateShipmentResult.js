import { d471 as c0, d42 as c1, d323 as c2, d2039 as c3, d2273 as c4, d2324 as c5, d92 as c6, d755 as c7, d2017 as c8 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d471 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d471;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentResult"]:c0(),["ExpandedOrderSummary"]:c1(),["MoneyValue"]:c2(),["PricingAmounts"]:c3(),["ReturnShipmentLineItemAllocation"]:c4(),["SettlementAmounts"]:c5(),["SharedCodec17"]:c6(),["Shipment"]:c7(),["SignedMoney"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
