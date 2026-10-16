import { d589 as c0, d747 as c1, d42 as c2, d776 as c3, d779 as c4, d764 as c5, d790 as c6, d798 as c7, d799 as c8, d806 as c9, d808 as c10, d323 as c11, d1879 as c12, d2053 as c13, d66 as c14, d2056 as c15, d2336 as c16, d2340 as c17, d92 as c18, d2034 as c19, d2431 as c20 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d764 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentHold"]:c7(),["FulfillmentLineItem"]:c8(),["FulfillmentOutcome"]:c9(),["FulfillmentRecipient"]:c10(),["MoneyValue"]:c11(),["OrderLineItemModifier"]:c12(),["PickupFulfillmentDetails"]:c13(),["PostalAddress"]:c14(),["PricingAmounts"]:c15(),["ServiceFulfillmentDetails"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec17"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
