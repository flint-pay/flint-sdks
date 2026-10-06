import { d2313 as c0 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2313 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SendOrderReceiptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSendOrderReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
