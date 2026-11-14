import { d7161 as c0, d7162 as c1, d7163 as c2 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6233 as c4, d6234 as c5, d6235 as c6, d6236 as c7, d6237 as c8, d6238 as c9, d6239 as c10 } from '../descriptors/data/286.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7211 as c11, d7212 as c12, d7213 as c13, d7214 as c14, d7215 as c15 } from '../descriptors/data/340.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7216 as c16, d7217 as c17, d7218 as c18, d7219 as c19, d7220 as c20, d7221 as c21, d7222 as c22, d7223 as c23, d7224 as c24, d7225 as c25, d7226 as c26, d7227 as c27, d7228 as c28 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7163 as d7163 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec965"]:c4(),["SharedCodec966"]:c5(),["SharedCodec967"]:c6(),["SharedCodec968"]:c7(),["SharedCodec969"]:c8(),["SharedCodec970"]:c9(),["SharedCodec971"]:c10(),["SharedCodec975"]:c11(),["SharedCodec976"]:c12(),["SharedCodec977"]:c13(),["SharedCodec978"]:c14(),["SharedCodec979"]:c15(),["SharedCodec980"]:c16(),["SharedCodec981"]:c17(),["SharedCodec982"]:c18(),["SharedCodec983"]:c19(),["SharedCodec984"]:c20(),["SharedCodec985"]:c21(),["SharedCodec986"]:c22(),["SharedCodec987"]:c23(),["SharedCodec988"]:c24(),["SharedCodec989"]:c25(),["SharedCodec990"]:c26(),["SharedCodec991"]:c27(),["SharedCodec992"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
