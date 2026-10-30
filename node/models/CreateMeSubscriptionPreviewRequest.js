import { d4510 as c0, d4508 as c2, d4509 as c3 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d240 as c1 } from '../descriptors/data/12.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5905 as c4, d5906 as c5 } from '../descriptors/data/271.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1496 as c6 } from '../descriptors/data/70.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5811 as c7 } from '../descriptors/data/266.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4051 as c8 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d240 as d240 } from '../descriptors/data/12.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec1271"]:c4(),["SharedCodec1272"]:c5(),["SharedCodec244"]:c6(),["SharedCodec245"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
