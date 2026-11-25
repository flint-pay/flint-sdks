import { d407 as c0 } from '../descriptors/data/25.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8082 as c1, d8083 as c4, d8084 as c5 } from '../descriptors/data/352.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8058 as c2 } from '../descriptors/data/351.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10922 as c3, d10923 as c6, d10924 as c7 } from '../descriptors/data/519.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d407 as d407 } from '../descriptors/data/25.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d407;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec346"]:c1(),["SharedCodec5"]:c2(),["SharedCodec584"]:c3(),["SharedCodec585"]:c4(),["SharedCodec586"]:c5(),["SharedCodec587"]:c6(),["SharedCodec588"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
