import { d4215 as c0 } from '../descriptors/data/179.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4215 as d4215 } from '../descriptors/data/179.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxJurisdictionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxJurisdictionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
