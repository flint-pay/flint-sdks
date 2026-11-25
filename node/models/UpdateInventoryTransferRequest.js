import { d9349 as c0, d9350 as c1, d9351 as c2 } from '../descriptors/data/424.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7843 as c3 } from '../descriptors/data/330.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7843 as d7843 } from '../descriptors/data/330.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7843;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3157"]:c0(),["SharedCodec3158"]:c1(),["SharedCodec3159"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
