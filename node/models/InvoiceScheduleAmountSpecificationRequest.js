import { d7161 as c0 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6233 as c2, d6234 as c3, d6235 as c4, d6236 as c5, d6237 as c6, d6238 as c7, d6239 as c8 } from '../descriptors/data/286.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7161 as d7161 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec965"]:c2(),["SharedCodec966"]:c3(),["SharedCodec967"]:c4(),["SharedCodec968"]:c5(),["SharedCodec969"]:c6(),["SharedCodec970"]:c7(),["SharedCodec971"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
