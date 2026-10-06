import { d2466 as c0, d2467 as c1, d2323 as c2, d2324 as c3, d2468 as c4 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2468 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec656"]:c0(),["SharedCodec657"]:c1(),["ShippingDimensions"]:c2(),["ShippingWeight"]:c3(),["UpdatePackageRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
