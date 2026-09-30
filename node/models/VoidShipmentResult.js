import { d41 as c0, d744 as c1, d754 as c2, d69 as c3, d718 as c4, d1843 as c5, d2071 as c6, d2116 as c7, d753 as c8, d91 as c9, d42 as c10, d717 as c11, d2119 as c12, d2120 as c13, d1666 as c14, d2313 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2313 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrderSummary"]:c0(),["FulfillmentEvent"]:c1(),["FulfillmentNotification"]:c2(),["MoneyValue"]:c3(),["Package"]:c4(),["PricingAmounts"]:c5(),["ReturnShipmentLineItemAllocation"]:c6(),["SettlementAmounts"]:c7(),["SharedCodec225"]:c8(),["SharedCodec26"]:c9(),["SharedCodec7"]:c10(),["Shipment"]:c11(),["ShippingDimensions"]:c12(),["ShippingWeight"]:c13(),["SignedMoney"]:c14(),["VoidShipmentResult"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
