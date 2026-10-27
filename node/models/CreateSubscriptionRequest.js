import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5148 as c1 } from '../descriptors/data/236.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3293 as c2, d3294 as c13, d3295 as c14 } from '../descriptors/data/131.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4206 as c3, d4207 as c15, d4208 as c16 } from '../descriptors/data/179.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5160 as c4, d5161 as c5, d5162 as c8, d5163 as c9, d5164 as c10, d5165 as c11, d5166 as c12, d5167 as c17, d5168 as c18, d5169 as c21 } from '../descriptors/data/237.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4432 as c6, d4433 as c7, d4435 as c19, d4436 as c20 } from '../descriptors/data/194.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5170 as c22, d5171 as c23 } from '../descriptors/data/238.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5148 as d5148 } from '../descriptors/data/236.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["OrderDeliveryDestinationAddressRequest"]:c3(),["SharedCodec1144"]:c4(),["SharedCodec1145"]:c5(),["SharedCodec1146"]:c6(),["SharedCodec1147"]:c7(),["SharedCodec1158"]:c8(),["SharedCodec1159"]:c9(),["SharedCodec1160"]:c10(),["SharedCodec1161"]:c11(),["SharedCodec235"]:c12(),["SharedCodec47"]:c13(),["SharedCodec48"]:c14(),["SharedCodec973"]:c15(),["SharedCodec974"]:c16(),["SubscriptionBillingScheduleRequest"]:c17(),["SubscriptionBillingStartRequest"]:c18(),["SubscriptionDeliveryDestinationRequest"]:c19(),["SubscriptionDeliveryRequest"]:c20(),["SubscriptionOfferLineItemRequest"]:c21(),["SubscriptionServiceLocationRequest"]:c22(),["SubscriptionTermsRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
