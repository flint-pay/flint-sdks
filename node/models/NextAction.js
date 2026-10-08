import { d1820 as c0, d1821 as c1, d14 as c2, d1819 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1820 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1820;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["NextAction"]:c0(),["NextActionMerchantAccountSession"]:c1(),["SharedCodec1"]:c2(),["SharedCodec466"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeNextAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
