import { d5209 as c0, d5210 as c1, d5211 as c2 } from '../descriptors/data/240.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2501 as c3 } from '../descriptors/data/102.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2501 as d2501 } from '../descriptors/data/102.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2501;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1249"]:c0(),["SharedCodec1250"]:c1(),["SharedCodec1251"]:c2(),["UpdateWebhookEndpointRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
