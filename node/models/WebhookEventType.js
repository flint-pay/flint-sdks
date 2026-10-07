import { d937 as c0, d2597 as c1 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2597 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2597;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec287"]:c0(),["WebhookEventType"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventType(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
