import { d5143 as c0, d5144 as c5 } from '../descriptors/data/228.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d7064 as c1, d7065 as c2, d7066 as c3 } from '../descriptors/data/337.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4256 as c4 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4256 as d4256 } from '../descriptors/data/178.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1384"]:c0(),["SharedCodec1479"]:c1(),["SharedCodec1480"]:c2(),["SharedCodec1481"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
