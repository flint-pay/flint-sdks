import { d391 as c0 } from '../descriptors/data/25.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8838 as c1 } from '../descriptors/data/434.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d391 as d391 } from '../descriptors/data/25.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTaxRegistrationRequest"]:c0(),["SharedCodec445"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTaxRegistrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
