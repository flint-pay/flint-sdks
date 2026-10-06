import { d45 as c0, d812 as c1, d822 as c2, d77 as c3, d1823 as c4, d1822 as c5, d785 as c6, d2034 as c7, d2157 as c8, d2158 as c9, d2269 as c10, d2320 as c11, d14 as c12, d821 as c13, d99 as c14, d1821 as c15, d46 as c16, d784 as c17, d2323 as c18, d2324 as c19, d226 as c20, d2525 as c21, d2526 as c22 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2525 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2525;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["Package"]:c6(),["PricingAmounts"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec1"]:c12(),["SharedCodec254"]:c13(),["SharedCodec27"]:c14(),["SharedCodec487"]:c15(),["SharedCodec8"]:c16(),["Shipment"]:c17(),["ShippingDimensions"]:c18(),["ShippingWeight"]:c19(),["SignedMoney"]:c20(),["VoidShipmentResponse"]:c21(),["VoidShipmentResult"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
