import { d900 as c0, d2634 as c1, d2635 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2635 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec251"]:c0(),["SharedCodec651"]:c1(),["WebhookEvent"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEvent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
