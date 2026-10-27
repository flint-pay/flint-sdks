import { d245 as c0 } from '../descriptors/data/14.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3799 as c1 } from '../descriptors/data/158.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d245 as d245 } from '../descriptors/data/14.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookTestEventRequest"]:c0(),["SharedCodec238"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
