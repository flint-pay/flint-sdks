import { d302 as c0 } from '../descriptors/data/15.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9104 as c1, d9109 as c6, d9110 as c7, d9111 as c8, d9112 as c9, d9113 as c10 } from '../descriptors/data/413.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9134 as c2, d9130 as c3, d9131 as c4, d9132 as c5, d9135 as c11, d9136 as c12, d9137 as c13, d9133 as c14 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d302 as d302 } from '../descriptors/data/15.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1385"]:c3(),["SharedCodec1386"]:c4(),["SharedCodec1387"]:c5(),["SharedCodec1388"]:c6(),["SharedCodec1389"]:c7(),["SharedCodec1390"]:c8(),["SharedCodec1391"]:c9(),["SharedCodec1392"]:c10(),["SharedCodec448"]:c11(),["SharedCodec449"]:c12(),["SharedCodec450"]:c13(),["SharedCodec451"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
