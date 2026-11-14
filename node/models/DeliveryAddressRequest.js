import { d6536 as c0, d6538 as c1 } from '../descriptors/data/302.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6536 as d6536 } from '../descriptors/data/302.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["SharedCodec510"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
