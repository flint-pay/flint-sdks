import { d4434 as c0 } from '../descriptors/data/189.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4434 as d4434 } from '../descriptors/data/189.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutLegalConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutLegalConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
