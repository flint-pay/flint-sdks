import { d7264 as c0, d7265 as c1 } from '../descriptors/data/329.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7264 as d7264 } from '../descriptors/data/329.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeConditionRequest"]:c0(),["DeliveryPostalCodeValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
