import { d1904 as c0 } from '../descriptors/data/95.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1904 as d1904 } from '../descriptors/data/95.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1904;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SendOrderReceiptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSendOrderReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
