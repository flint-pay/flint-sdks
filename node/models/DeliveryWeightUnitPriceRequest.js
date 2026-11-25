import { d8695 as c0 } from '../descriptors/data/388.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c1 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8695 as d8695 } from '../descriptors/data/388.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWeightUnitPriceRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWeightUnitPriceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
