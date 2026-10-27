import { d5180 as c0, d5181 as c1, d5182 as c2 } from '../descriptors/data/238.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2488 as c3 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2488 as d2488 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1232"]:c0(),["SharedCodec1233"]:c1(),["SharedCodec1234"]:c2(),["UpdateWebhookEndpointRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
