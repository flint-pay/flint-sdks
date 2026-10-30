import { d4510 as c0, d4508 as c2, d4509 as c3 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4645 as c1, d4646 as c4, d4647 as c5 } from '../descriptors/data/200.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5905 as c6, d5906 as c7 } from '../descriptors/data/271.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4051 as c8 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4060 as c9 } from '../descriptors/data/167.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4172 as c10 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4172 as d4172 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec1271"]:c6(),["SharedCodec1272"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8(),["SubscriptionDeliveryRequest"]:c9(),["UpdateMeSubscriptionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMeSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
