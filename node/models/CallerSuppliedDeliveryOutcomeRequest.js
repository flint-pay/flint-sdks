import { d4431 as c0, d4442 as c1 } from '../descriptors/data/189.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4488 as c3, d4489 as c4, d4490 as c5 } from '../descriptors/data/192.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4431 as d4431 } from '../descriptors/data/189.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec91"]:c3(),["SharedCodec92"]:c4(),["SharedCodec93"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
