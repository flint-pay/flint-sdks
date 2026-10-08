import { d891 as c0, d323 as c1, d2431 as c2, d2432 as c3, d2433 as c4, d2430 as c5, d2434 as c6 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2434 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec600"]:c2(),["SharedCodec601"]:c3(),["SharedCodec602"]:c4(),["UpdateBundleComponentRequest"]:c5(),["UpdateBundleRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
