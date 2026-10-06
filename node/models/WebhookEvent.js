import { d937 as c0, d2592 as c1, d2593 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2593 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec287"]:c0(),["SharedCodec671"]:c1(),["WebhookEvent"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEvent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
