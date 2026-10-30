import { d4510 as c0, d4508 as c4, d4509 as c5 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d326 as c1 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4645 as c2, d4646 as c6, d4647 as c7 } from '../descriptors/data/200.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6925 as c8, d6926 as c9 } from '../descriptors/data/329.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5905 as c10, d5906 as c11 } from '../descriptors/data/271.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6927 as c12, d6928 as c13, d6929 as c14, d6937 as c16, d6938 as c17, d6939 as c18 } from '../descriptors/data/330.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1461 as c15 } from '../descriptors/data/67.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4051 as c19 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4060 as c20, d4066 as c21 } from '../descriptors/data/167.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4112 as c22, d4114 as c23 } from '../descriptors/data/169.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d326 as d326 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5(),["SharedCodec101"]:c6(),["SharedCodec102"]:c7(),["SharedCodec1259"]:c8(),["SharedCodec1260"]:c9(),["SharedCodec1271"]:c10(),["SharedCodec1272"]:c11(),["SharedCodec1319"]:c12(),["SharedCodec1320"]:c13(),["SharedCodec1321"]:c14(),["SharedCodec1322"]:c15(),["SharedCodec332"]:c16(),["SubscriptionBillingScheduleRequest"]:c17(),["SubscriptionBillingStartRequest"]:c18(),["SubscriptionDeliveryDestinationRequest"]:c19(),["SubscriptionDeliveryRequest"]:c20(),["SubscriptionOfferLineItemRequest"]:c21(),["SubscriptionServiceLocationRequest"]:c22(),["SubscriptionTermsRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
