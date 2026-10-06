import { d77 as c0, d361 as c1, d2357 as c2, d2358 as c3, d2360 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2360 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec128"]:c1(),["SharedCodec618"]:c2(),["SharedCodec619"]:c3(),["TippingSettingsPatch"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTippingSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
