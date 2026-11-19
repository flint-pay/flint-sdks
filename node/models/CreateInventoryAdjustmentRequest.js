import { d306 as c0 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9104 as c1, d9106 as c2, d9108 as c3, d9109 as c8, d9110 as c9, d9111 as c10, d9112 as c11, d9113 as c12, d9118 as c17, d9119 as c18 } from '../descriptors/data/413.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9134 as c4, d9130 as c5, d9131 as c6, d9132 as c7, d9135 as c13, d9136 as c14, d9137 as c15, d9133 as c16, d9120 as c19, d9121 as c20, d9122 as c21, d9123 as c22, d9124 as c23 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d306 as d306 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1385"]:c5(),["SharedCodec1386"]:c6(),["SharedCodec1387"]:c7(),["SharedCodec1388"]:c8(),["SharedCodec1389"]:c9(),["SharedCodec1390"]:c10(),["SharedCodec1391"]:c11(),["SharedCodec1392"]:c12(),["SharedCodec448"]:c13(),["SharedCodec449"]:c14(),["SharedCodec450"]:c15(),["SharedCodec451"]:c16(),["SharedCodec452"]:c17(),["SharedCodec453"]:c18(),["SharedCodec454"]:c19(),["SharedCodec455"]:c20(),["SharedCodec456"]:c21(),["SharedCodec457"]:c22(),["SharedCodec458"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
