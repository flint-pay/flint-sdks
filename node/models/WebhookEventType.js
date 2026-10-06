import { d923 as c0, d2569 as c1 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2569 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2569;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec286"]:c0(),["WebhookEventType"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventType(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
