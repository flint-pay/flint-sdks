import { d394 as c0 } from '../descriptors/data/25.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8323 as c1 } from '../descriptors/data/407.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d394 as d394 } from '../descriptors/data/25.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookTestEventRequest"]:c0(),["SharedCodec28"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
