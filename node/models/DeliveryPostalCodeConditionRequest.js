import { d6461 as c0, d6462 as c1 } from '../descriptors/data/297.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6461 as d6461 } from '../descriptors/data/297.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeConditionRequest"]:c0(),["DeliveryPostalCodeValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
