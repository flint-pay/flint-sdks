import { d66 as c0, d2038 as c1 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2038 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2038;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0(),["PrefilledCustomerInfo"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePrefilledCustomerInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
