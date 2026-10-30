import { d4510 as c0, d4508 as c2, d4509 as c3 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d323 as c1 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5905 as c4, d5906 as c5 } from '../descriptors/data/271.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4051 as c6 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d323 as d323 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestDeliveryOptions"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec1271"]:c4(),["SharedCodec1272"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
