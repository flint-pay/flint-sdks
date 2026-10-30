import { d98 as c0 } from '../descriptors/data/4.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d98 as d98 } from '../descriptors/data/4.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d98;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelOrderPaymentAttemptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelOrderPaymentAttemptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
