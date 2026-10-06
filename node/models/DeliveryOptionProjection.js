import { d130 as c0, d586 as c1, d587 as c2, d621 as c3, d639 as c4, d649 as c5, d650 as c6, d687 as c7, d706 as c8, d731 as c9, d741 as c10, d77 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d639 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d639;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryArrivalEstimate"]:c2(),["DeliveryLocationSummaryResource"]:c3(),["DeliveryOptionProjection"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryQuoteExecutionLegResource"]:c7(),["DeliveryRecipientRequirement"]:c8(),["DeliveryShipmentDetails"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryOptionProjection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
