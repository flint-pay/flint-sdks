import { d184 as c0 } from '../descriptors/data/8.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4831 as c1 } from '../descriptors/data/212.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c2 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4508 as c3, d4509 as c4 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4810 as c5, d4821 as c6, d4822 as c7, d4820 as c8 } from '../descriptors/data/211.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d184 as d184 } from '../descriptors/data/8.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerRequest"]:c0(),["DocumentTaxIDRequest"]:c1(),["MetadataRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec151"]:c5(),["SharedCodec841"]:c6(),["SharedCodec842"]:c7(),["TaxIdentityPatch"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
