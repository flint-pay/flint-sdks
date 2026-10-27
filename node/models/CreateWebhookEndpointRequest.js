import { d244 as c0 } from '../descriptors/data/14.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5218 as c1, d5219 as c2 } from '../descriptors/data/241.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d244 as d244 } from '../descriptors/data/14.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookEndpointRequest"]:c0(),["SharedCodec236"]:c1(),["SharedCodec237"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
