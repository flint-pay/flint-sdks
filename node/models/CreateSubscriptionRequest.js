import { d3148 as c0 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5119 as c1 } from '../descriptors/data/234.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3279 as c2, d3280 as c13, d3281 as c14 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4191 as c3, d4192 as c15, d4193 as c16 } from '../descriptors/data/178.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5131 as c4, d5132 as c5, d5133 as c8, d5134 as c9, d5135 as c10, d5136 as c11, d5137 as c12, d5138 as c17, d5139 as c18, d5140 as c21 } from '../descriptors/data/235.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4412 as c6, d4413 as c7, d4415 as c19, d4416 as c20 } from '../descriptors/data/193.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5141 as c22, d5142 as c23 } from '../descriptors/data/236.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5119 as d5119 } from '../descriptors/data/234.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5119;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["OrderDeliveryDestinationAddressRequest"]:c3(),["SharedCodec1133"]:c4(),["SharedCodec1134"]:c5(),["SharedCodec1135"]:c6(),["SharedCodec1136"]:c7(),["SharedCodec1147"]:c8(),["SharedCodec1148"]:c9(),["SharedCodec1149"]:c10(),["SharedCodec1150"]:c11(),["SharedCodec230"]:c12(),["SharedCodec43"]:c13(),["SharedCodec44"]:c14(),["SharedCodec968"]:c15(),["SharedCodec969"]:c16(),["SubscriptionBillingScheduleRequest"]:c17(),["SubscriptionBillingStartRequest"]:c18(),["SubscriptionDeliveryDestinationRequest"]:c19(),["SubscriptionDeliveryRequest"]:c20(),["SubscriptionOfferLineItemRequest"]:c21(),["SubscriptionServiceLocationRequest"]:c22(),["SubscriptionTermsRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
