import { d6429 as c0, d6430 as c1 } from '../descriptors/data/296.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6429 as d6429 } from '../descriptors/data/296.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeConditionRequest"]:c0(),["DeliveryPostalCodeValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
