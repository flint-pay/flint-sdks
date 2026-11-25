import { d8068 as c0, d8069 as c1, d8082 as c2, d8083 as c4, d8084 as c5 } from '../descriptors/data/352.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8058 as c3 } from '../descriptors/data/351.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7820 as c6 } from '../descriptors/data/329.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7820 as d7820 } from '../descriptors/data/329.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7820;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3124"]:c0(),["SharedCodec3125"]:c1(),["SharedCodec346"]:c2(),["SharedCodec5"]:c3(),["SharedCodec585"]:c4(),["SharedCodec586"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
