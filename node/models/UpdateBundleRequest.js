import { d914 as c0, d77 as c1, d2369 as c2, d2370 as c3, d2371 as c4, d2368 as c5, d2372 as c6 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2372 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2372;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec621"]:c2(),["SharedCodec622"]:c3(),["SharedCodec623"]:c4(),["UpdateBundleComponentRequest"]:c5(),["UpdateBundleRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
