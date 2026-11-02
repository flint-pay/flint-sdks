import { d331 as c0 } from '../descriptors/data/19.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6521 as c1 } from '../descriptors/data/307.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d331 as d331 } from '../descriptors/data/19.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookTestEventRequest"]:c0(),["SharedCodec23"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
