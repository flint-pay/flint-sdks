import { d1708 as c0 } from '../descriptors/data/84.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1708 as d1708 } from '../descriptors/data/84.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1708;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReceiptSettingsPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiptSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
