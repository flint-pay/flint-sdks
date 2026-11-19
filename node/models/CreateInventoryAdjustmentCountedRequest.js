import { d304 as c0 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9108 as c1, d9118 as c10, d9119 as c11 } from '../descriptors/data/413.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9134 as c2, d9130 as c3, d9131 as c4, d9132 as c5, d9135 as c6, d9136 as c7, d9137 as c8, d9133 as c9, d9120 as c12 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d304 as d304 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCountedRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1387"]:c5(),["SharedCodec448"]:c6(),["SharedCodec449"]:c7(),["SharedCodec450"]:c8(),["SharedCodec451"]:c9(),["SharedCodec452"]:c10(),["SharedCodec453"]:c11(),["SharedCodec454"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
