import { d323 as c0, d336 as c1, d2435 as c2, d2436 as c3, d2438 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2438 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2438;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec104"]:c1(),["SharedCodec602"]:c2(),["SharedCodec603"]:c3(),["TippingSettingsPatch"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTippingSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
