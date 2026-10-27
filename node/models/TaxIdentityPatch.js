import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3333 as c1 } from '../descriptors/data/134.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3446 as c2, d3445 as c3, d3458 as c4 } from '../descriptors/data/140.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3445 as d3445 } from '../descriptors/data/140.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3445;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DocumentTaxID"]:c1(),["SharedCodec956"]:c2(),["TaxIdentityPatch"]:c3(),["TaxIdentityRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
