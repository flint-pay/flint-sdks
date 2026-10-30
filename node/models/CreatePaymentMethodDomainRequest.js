import { d266 as c0 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d266 as d266 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d266;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentMethodDomainRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
