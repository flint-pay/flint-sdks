import { d45 as c0, d812 as c1, d822 as c2, d77 as c3, d785 as c4, d2034 as c5, d2269 as c6, d2320 as c7, d821 as c8, d99 as c9, d46 as c10, d784 as c11, d2323 as c12, d2324 as c13, d226 as c14, d2526 as c15 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2526 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2526;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec254"]:c8(),["SharedCodec27"]:c9(),["SharedCodec8"]:c10(),["Shipment"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14(),["VoidShipmentResult"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
