import { d620 as c0, d618 as c1, d619 as c2, d287 as c3, d286 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d620 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d620;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelector"]:c0(),["SharedCodec197"]:c1(),["SharedCodec198"]:c2(),["SharedCodec82"]:c3(),["SharedCodec83"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelector(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
