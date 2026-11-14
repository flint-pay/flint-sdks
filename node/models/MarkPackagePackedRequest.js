import { d958 as c0 } from '../descriptors/data/47.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d958 as d958 } from '../descriptors/data/47.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d958;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkPackagePackedRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkPackagePackedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
