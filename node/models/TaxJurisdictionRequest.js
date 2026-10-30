import { d6111 as c0 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6111 as d6111 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6111;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TaxJurisdictionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxJurisdictionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
