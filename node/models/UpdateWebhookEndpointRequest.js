import { d6689 as c0, d6690 as c5 } from '../descriptors/data/309.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8899 as c1, d8900 as c2, d8901 as c3 } from '../descriptors/data/440.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5740 as c4 } from '../descriptors/data/253.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5740 as d5740 } from '../descriptors/data/253.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1704"]:c0(),["SharedCodec1824"]:c1(),["SharedCodec1825"]:c2(),["SharedCodec1826"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
