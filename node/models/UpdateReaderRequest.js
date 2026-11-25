import { d8132 as c0 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8234 as c1 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7873 as c2 } from '../descriptors/data/333.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7873 as d7873 } from '../descriptors/data/333.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7873;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3128"]:c0(),["SharedCodec3131"]:c1(),["UpdateReaderRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
