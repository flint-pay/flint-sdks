import { d4510 as c0, d4508 as c5, d4509 as c6 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d321 as c1, d326 as c2 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4645 as c3, d4646 as c7, d4647 as c8 } from '../descriptors/data/200.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c4 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6925 as c9, d6926 as c10 } from '../descriptors/data/329.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5905 as c11, d5906 as c12 } from '../descriptors/data/271.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6927 as c13, d6928 as c14, d6929 as c15, d6937 as c17, d6938 as c18, d6939 as c19 } from '../descriptors/data/330.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1461 as c16 } from '../descriptors/data/67.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4051 as c20 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4060 as c21, d4066 as c22 } from '../descriptors/data/167.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4112 as c23, d4114 as c24 } from '../descriptors/data/169.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d321 as d321 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6(),["SharedCodec101"]:c7(),["SharedCodec102"]:c8(),["SharedCodec1259"]:c9(),["SharedCodec1260"]:c10(),["SharedCodec1271"]:c11(),["SharedCodec1272"]:c12(),["SharedCodec1319"]:c13(),["SharedCodec1320"]:c14(),["SharedCodec1321"]:c15(),["SharedCodec1322"]:c16(),["SharedCodec332"]:c17(),["SubscriptionBillingScheduleRequest"]:c18(),["SubscriptionBillingStartRequest"]:c19(),["SubscriptionDeliveryDestinationRequest"]:c20(),["SubscriptionDeliveryRequest"]:c21(),["SubscriptionOfferLineItemRequest"]:c22(),["SubscriptionServiceLocationRequest"]:c23(),["SubscriptionTermsRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
