import { d762 as c0, d1820 as c1, d1821 as c2, d14 as c3, d1819 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d762 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d762;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["SharedCodec1"]:c3(),["SharedCodec466"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeErrorRemediation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
