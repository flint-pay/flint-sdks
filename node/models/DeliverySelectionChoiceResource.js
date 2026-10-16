import { d560 as c0, d600 as c1, d632 as c2, d633 as c3, d708 as c4, d709 as c5, d714 as c6, d323 as c7 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d708 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d708;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryLocationSummaryResource"]:c1(),["DeliveryPickupDetails"]:c2(),["DeliveryPlan"]:c3(),["DeliverySelectionChoiceResource"]:c4(),["DeliverySelectionInstructionsRequest"]:c5(),["DeliveryShipmentDetails"]:c6(),["MoneyValue"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
