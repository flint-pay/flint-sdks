import { d5500 as c0 } from '../descriptors/data/240.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5500 as d5500 } from '../descriptors/data/240.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SignWebhookEndpointDeliveryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSignWebhookEndpointDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
