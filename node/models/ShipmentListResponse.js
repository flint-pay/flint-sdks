import { d45 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2034 as c4, d2157 as c5, d2158 as c6, d2269 as c7, d2320 as c8, d14 as c9, d99 as c10, d1821 as c11, d784 as c12, d2321 as c13, d226 as c14 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2321 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PricingAmounts"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnShipmentLineItemAllocation"]:c7(),["SettlementAmounts"]:c8(),["SharedCodec1"]:c9(),["SharedCodec27"]:c10(),["SharedCodec487"]:c11(),["Shipment"]:c12(),["ShipmentListResponse"]:c13(),["SignedMoney"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShipmentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
