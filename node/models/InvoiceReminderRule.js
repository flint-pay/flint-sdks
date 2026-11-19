import { d10857 as c0 } from '../descriptors/data/516.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10857 as d10857 } from '../descriptors/data/516.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10857;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceReminderRule"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceReminderRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
