import { d6661 as c0, d6662 as c5 } from '../descriptors/data/308.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8868 as c1, d8869 as c2, d8870 as c3 } from '../descriptors/data/438.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5712 as c4 } from '../descriptors/data/252.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5712 as d5712 } from '../descriptors/data/252.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1697"]:c0(),["SharedCodec1817"]:c1(),["SharedCodec1818"]:c2(),["SharedCodec1819"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
