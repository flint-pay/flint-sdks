import { d937 as c0, d2592 as c1, d2603 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2603 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2603;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec287"]:c0(),["SharedCodec671"]:c1(),["WebhookStreamWithheld"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookStreamWithheld(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
