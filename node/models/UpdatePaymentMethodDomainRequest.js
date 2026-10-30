import { d4184 as c0 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4184 as d4184 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdatePaymentMethodDomainRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
