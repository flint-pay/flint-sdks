import { d220 as c0 } from '../descriptors/data/10.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d220 as d220 } from '../descriptors/data/10.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomDomainRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
