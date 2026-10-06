import { d1843 as c0, d1842 as c1, d226 as c2 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1843 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1843;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderActivity"]:c0(),["SharedCodec491"]:c1(),["SignedMoney"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
