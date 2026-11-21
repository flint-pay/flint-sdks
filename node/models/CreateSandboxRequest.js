import { d407 as c0 } from '../descriptors/data/24.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8007 as c1, d8008 as c4, d8009 as c5 } from '../descriptors/data/348.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7983 as c2 } from '../descriptors/data/347.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10835 as c3, d10836 as c6, d10837 as c7 } from '../descriptors/data/514.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d407 as d407 } from '../descriptors/data/24.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d407;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec341"]:c1(),["SharedCodec5"]:c2(),["SharedCodec577"]:c3(),["SharedCodec578"]:c4(),["SharedCodec579"]:c5(),["SharedCodec580"]:c6(),["SharedCodec581"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
