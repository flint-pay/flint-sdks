import { d188 as c0 } from '../descriptors/data/9.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3793 as c1 } from '../descriptors/data/158.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d188 as d188 } from '../descriptors/data/9.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d188;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppRequest"]:c0(),["PartnerAppPermissionManifestEntry"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
