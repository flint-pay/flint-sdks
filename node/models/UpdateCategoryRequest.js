import { d8037 as c0, d8038 as c1, d8036 as c2 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7728 as c3 } from '../descriptors/data/325.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7728 as d7728 } from '../descriptors/data/325.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7728;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3063"]:c0(),["SharedCodec3064"]:c1(),["SharedCodec3065"]:c2(),["UpdateCategoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
