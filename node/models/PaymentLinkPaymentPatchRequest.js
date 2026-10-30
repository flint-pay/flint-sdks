import { d6242 as c0 } from '../descriptors/data/289.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6242 as d6242 } from '../descriptors/data/289.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkPaymentPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkPaymentPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
