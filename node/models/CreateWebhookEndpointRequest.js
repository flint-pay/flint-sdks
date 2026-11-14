import { d393 as c0 } from '../descriptors/data/25.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8891 as c1, d8892 as c2 } from '../descriptors/data/440.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6658 as c3 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d393 as d393 } from '../descriptors/data/25.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d393;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookEndpointRequest"]:c0(),["SharedCodec450"]:c1(),["SharedCodec451"]:c2(),["WebhookSigningMethod"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
