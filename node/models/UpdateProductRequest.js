import { d896 as c0, d2447 as c1, d2449 as c2, d2539 as c3, d2537 as c4, d2538 as c5, d2540 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2540 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2540;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["SharedCodec605"]:c1(),["SharedCodec607"]:c2(),["SharedCodec647"]:c3(),["UpdateProductOptionRequest"]:c4(),["UpdateProductOptionValueRequest"]:c5(),["UpdateProductRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
