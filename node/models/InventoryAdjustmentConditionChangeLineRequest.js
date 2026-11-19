import { d9104 as c0, d9109 as c1, d9110 as c2, d9111 as c3, d9112 as c4, d9113 as c5 } from '../descriptors/data/413.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9104 as d9104 } from '../descriptors/data/413.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9104;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1388"]:c1(),["SharedCodec1389"]:c2(),["SharedCodec1390"]:c3(),["SharedCodec1391"]:c4(),["SharedCodec1392"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
