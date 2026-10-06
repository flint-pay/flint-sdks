import { d26 as c0, d27 as c1 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d27 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d27;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLogQueryParam"]:c0(),["APIRequestLogReproduction"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogReproduction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
