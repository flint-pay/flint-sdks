import { d323 as c0, d1874 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1874 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1874;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardSelection"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderGiftCardSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
