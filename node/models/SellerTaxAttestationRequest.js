import { d8824 as c0 } from '../descriptors/data/434.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8824 as d8824 } from '../descriptors/data/434.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SellerTaxAttestationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSellerTaxAttestationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
