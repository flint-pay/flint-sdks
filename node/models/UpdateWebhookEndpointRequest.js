import { d8801 as c0, d8802 as c5 } from '../descriptors/data/394.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d11107 as c1, d11108 as c2, d11109 as c3 } from '../descriptors/data/531.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7820 as c4 } from '../descriptors/data/332.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7820 as d7820 } from '../descriptors/data/332.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7820;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3090"]:c0(),["SharedCodec3218"]:c1(),["SharedCodec3219"]:c2(),["SharedCodec3220"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
