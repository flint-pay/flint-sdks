import { d3279 as c0, d3280 as c6, d3281 as c7 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4191 as c1, d4192 as c8, d4193 as c9 } from '../descriptors/data/178.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5143 as c2, d5144 as c3 } from '../descriptors/data/236.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4412 as c4, d4413 as c5, d4415 as c11, d4416 as c12 } from '../descriptors/data/193.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5165 as c10 } from '../descriptors/data/237.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2487 as c13 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2487 as d2487 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionRecipientRequest"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec1131"]:c2(),["SharedCodec1132"]:c3(),["SharedCodec1135"]:c4(),["SharedCodec1136"]:c5(),["SharedCodec43"]:c6(),["SharedCodec44"]:c7(),["SharedCodec968"]:c8(),["SharedCodec969"]:c9(),["SubscriptionBillingScheduleUpdateRequest"]:c10(),["SubscriptionDeliveryDestinationRequest"]:c11(),["SubscriptionDeliveryRequest"]:c12(),["UpdateSubscriptionRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
