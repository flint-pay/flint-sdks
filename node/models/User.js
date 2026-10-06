import { d58 as c0, d2518 as c1 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2518 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2518;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["User"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUser(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
