import { d6428 as c0, d6429 as c1 } from '../descriptors/data/293.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6428 as d6428 } from '../descriptors/data/293.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeConditionRequest"]:c0(),["DeliveryPostalCodeValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
