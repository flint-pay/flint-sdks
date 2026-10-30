import { d6972 as c0 } from '../descriptors/data/333.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6972 as d6972 } from '../descriptors/data/333.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6972;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SellerTaxAttestationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSellerTaxAttestationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
