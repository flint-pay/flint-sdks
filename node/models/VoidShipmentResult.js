import { d42 as c0, d793 as c1, d803 as c2, d323 as c3, d766 as c4, d2056 as c5, d2289 as c6, d2340 as c7, d92 as c8, d802 as c9, d43 as c10, d765 as c11, d2343 as c12, d2344 as c13, d2034 as c14, d2584 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2584 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2584;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec17"]:c8(),["SharedCodec233"]:c9(),["SharedCodec5"]:c10(),["Shipment"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14(),["VoidShipmentResult"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
