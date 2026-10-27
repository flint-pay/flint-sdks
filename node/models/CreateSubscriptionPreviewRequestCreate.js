import { d3148 as c0 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d235 as c1 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5119 as c2 } from '../descriptors/data/234.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3279 as c3, d3280 as c14, d3281 as c15 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4191 as c4, d4192 as c16, d4193 as c17 } from '../descriptors/data/178.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5131 as c5, d5132 as c6, d5133 as c9, d5134 as c10, d5135 as c11, d5136 as c12, d5137 as c13, d5138 as c18, d5139 as c19, d5140 as c22 } from '../descriptors/data/235.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4412 as c7, d4413 as c8, d4415 as c20, d4416 as c21 } from '../descriptors/data/193.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5141 as c23, d5142 as c24 } from '../descriptors/data/236.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d235 as d235 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["OrderDeliveryDestinationAddressRequest"]:c4(),["SharedCodec1133"]:c5(),["SharedCodec1134"]:c6(),["SharedCodec1135"]:c7(),["SharedCodec1136"]:c8(),["SharedCodec1147"]:c9(),["SharedCodec1148"]:c10(),["SharedCodec1149"]:c11(),["SharedCodec1150"]:c12(),["SharedCodec230"]:c13(),["SharedCodec43"]:c14(),["SharedCodec44"]:c15(),["SharedCodec968"]:c16(),["SharedCodec969"]:c17(),["SubscriptionBillingScheduleRequest"]:c18(),["SubscriptionBillingStartRequest"]:c19(),["SubscriptionDeliveryDestinationRequest"]:c20(),["SubscriptionDeliveryRequest"]:c21(),["SubscriptionOfferLineItemRequest"]:c22(),["SubscriptionServiceLocationRequest"]:c23(),["SubscriptionTermsRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
