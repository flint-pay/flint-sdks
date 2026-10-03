import { d916 as c0, d2550 as c1, d2561 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2561 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2561;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec280"]:c0(),["SharedCodec657"]:c1(),["WebhookStreamWithheld"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookStreamWithheld(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
