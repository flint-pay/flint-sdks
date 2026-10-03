import { d78 as c0, d79 as c1, d81 as c2, d124 as c3, d91 as c4, d570 as c5, d571 as c6, d572 as c7, d573 as c8, d598 as c9, d607 as c10, d636 as c11, d637 as c12, d672 as c13, d690 as c14, d715 as c15, d725 as c16, d74 as c17 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d91 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d91;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["CheckoutDerivedDeliveryResource"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryInputConstraint"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryPickupDetails"]:c11(),["DeliveryPlan"]:c12(),["DeliveryQuoteLineItemResource"]:c13(),["DeliveryRecipientRequirement"]:c14(),["DeliveryShipmentDetails"]:c15(),["DeliveryWindowResource"]:c16(),["MoneyValue"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
