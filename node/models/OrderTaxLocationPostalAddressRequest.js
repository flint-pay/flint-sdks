import { d9473 as c0 } from '../descriptors/data/430.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9473 as d9473 } from '../descriptors/data/430.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9473;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationPostalAddressRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationPostalAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
