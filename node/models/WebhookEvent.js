import { d916 as c0, d2550 as c1, d2551 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2551 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec280"]:c0(),["SharedCodec657"]:c1(),["WebhookEvent"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEvent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
