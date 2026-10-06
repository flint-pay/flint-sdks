import { d45 as c0, d77 as c1, d2034 as c2, d2269 as c3, d2320 as c4, d99 as c5, d784 as c6, d226 as c7 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d784 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d784;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["PricingAmounts"]:c2(),["ReturnShipmentLineItemAllocation"]:c3(),["SettlementAmounts"]:c4(),["SharedCodec27"]:c5(),["Shipment"]:c6(),["SignedMoney"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShipment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
