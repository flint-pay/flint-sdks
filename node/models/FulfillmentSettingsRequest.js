import { d669 as c0 } from '../descriptors/data/37.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d669 as d669 } from '../descriptors/data/37.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d669;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
