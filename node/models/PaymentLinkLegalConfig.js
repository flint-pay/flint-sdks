import { d6238 as c0 } from '../descriptors/data/289.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6238 as d6238 } from '../descriptors/data/289.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkLegalConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLegalConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
