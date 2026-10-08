import { d477 as c0, d476 as c1, d2369 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2369 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec161"]:c0(),["SharedCodec162"]:c1(),["SubscriptionOffer"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOffer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
