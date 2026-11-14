import { d6657 as c0, d6658 as c5 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8878 as c1, d8879 as c2, d8880 as c3 } from '../descriptors/data/439.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5716 as c4 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5716 as d5716 } from '../descriptors/data/253.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5716;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1709"]:c0(),["SharedCodec1829"]:c1(),["SharedCodec1830"]:c2(),["SharedCodec1831"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
