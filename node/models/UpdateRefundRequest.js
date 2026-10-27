import { d2476 as c0 } from '../descriptors/data/100.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2476 as d2476 } from '../descriptors/data/100.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateRefundRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
