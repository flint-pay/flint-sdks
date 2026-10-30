import { d4510 as c0, d4508 as c2, d4509 as c3 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4645 as c1, d4646 as c4, d4647 as c5 } from '../descriptors/data/200.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6940 as c6, d6941 as c7 } from '../descriptors/data/330.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5905 as c8, d5906 as c9 } from '../descriptors/data/271.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4400 as c10, d4401 as c11, d4399 as c12 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6963 as c13 } from '../descriptors/data/332.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4051 as c14 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4060 as c15 } from '../descriptors/data/167.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4223 as c16 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4223 as d4223 } from '../descriptors/data/177.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec1257"]:c6(),["SharedCodec1258"]:c7(),["SharedCodec1271"]:c8(),["SharedCodec1272"]:c9(),["SharedCodec1348"]:c10(),["SharedCodec1349"]:c11(),["SharedCodec1350"]:c12(),["SubscriptionBillingScheduleUpdateRequest"]:c13(),["SubscriptionDeliveryDestinationRequest"]:c14(),["SubscriptionDeliveryRequest"]:c15(),["UpdateSubscriptionRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
