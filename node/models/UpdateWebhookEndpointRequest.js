import { d6659 as c0, d6660 as c5 } from '../descriptors/data/308.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8865 as c1, d8866 as c2, d8867 as c3 } from '../descriptors/data/438.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5710 as c4 } from '../descriptors/data/252.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5710 as d5710 } from '../descriptors/data/252.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1697"]:c0(),["SharedCodec1817"]:c1(),["SharedCodec1818"]:c2(),["SharedCodec1819"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
