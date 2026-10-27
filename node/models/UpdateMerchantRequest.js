import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3082 as c1 } from '../descriptors/data/120.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4480 as c2 } from '../descriptors/data/196.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2458 as c3 } from '../descriptors/data/98.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2458 as d2458 } from '../descriptors/data/98.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2458;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["ImageRequest"]:c1(),["SharedCodec1205"]:c2(),["UpdateMerchantRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMerchantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
