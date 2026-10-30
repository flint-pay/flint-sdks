import { d6249 as c0 } from '../descriptors/data/290.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6249 as d6249 } from '../descriptors/data/290.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkThemePatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkThemePatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
