import { d2476 as c0 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2476 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateWebhookEndpointRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
