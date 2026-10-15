import { d323 as c0, d2066 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2066 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ProductPriceRange"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductPriceRange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
