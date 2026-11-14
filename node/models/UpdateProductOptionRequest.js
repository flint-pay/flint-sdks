import { d8154 as c0 } from '../descriptors/data/395.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8173 as c1, d8174 as c2 } from '../descriptors/data/396.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8173 as d8173 } from '../descriptors/data/396.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1786"]:c0(),["UpdateProductOptionRequest"]:c1(),["UpdateProductOptionValueRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
