import { d610 as c0, d608 as c1, d609 as c2, d287 as c3, d286 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d610 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelector"]:c0(),["SharedCodec191"]:c1(),["SharedCodec192"]:c2(),["SharedCodec82"]:c3(),["SharedCodec83"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelector(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
