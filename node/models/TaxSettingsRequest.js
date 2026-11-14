import { d8597 as c0, d8598 as c1 } from '../descriptors/data/421.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5624 as c2 } from '../descriptors/data/245.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5624 as d5624 } from '../descriptors/data/245.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5624;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1670"]:c0(),["SharedCodec1671"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
