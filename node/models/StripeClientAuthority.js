import { d2300 as c0 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2300 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2300;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["StripeClientAuthority"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeStripeClientAuthority(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
