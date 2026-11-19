import { d9134 as c0, d9130 as c1, d9131 as c2, d9132 as c3, d9133 as c4 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9134 as d9134 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec1385"]:c1(),["SharedCodec1386"]:c2(),["SharedCodec1387"]:c3(),["SharedCodec451"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
