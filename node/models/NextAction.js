import { d1823 as c0, d1822 as c1, d14 as c2, d1821 as c3 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1823 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1823;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["NextAction"]:c0(),["NextActionMerchantAccountSession"]:c1(),["SharedCodec1"]:c2(),["SharedCodec487"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeNextAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
