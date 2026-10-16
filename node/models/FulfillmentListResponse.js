import { d589 as c0, d747 as c1, d42 as c2, d776 as c3, d779 as c4, d764 as c5, d790 as c6, d798 as c7, d799 as c8, d801 as c9, d806 as c10, d808 as c11, d323 as c12, d1823 as c13, d1824 as c14, d1879 as c15, d2053 as c16, d66 as c17, d2056 as c18, d2178 as c19, d2179 as c20, d2336 as c21, d2340 as c22, d14 as c23, d92 as c24, d1822 as c25, d2034 as c26, d2431 as c27 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d801 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d801;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentHold"]:c7(),["FulfillmentLineItem"]:c8(),["FulfillmentListResponse"]:c9(),["FulfillmentOutcome"]:c10(),["FulfillmentRecipient"]:c11(),["MoneyValue"]:c12(),["NextAction"]:c13(),["NextActionMerchantAccountSession"]:c14(),["OrderLineItemModifier"]:c15(),["PickupFulfillmentDetails"]:c16(),["PostalAddress"]:c17(),["PricingAmounts"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["ServiceFulfillmentDetails"]:c21(),["SettlementAmounts"]:c22(),["SharedCodec1"]:c23(),["SharedCodec17"]:c24(),["SharedCodec467"]:c25(),["SignedMoney"]:c26(),["TextModifierRequest"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
