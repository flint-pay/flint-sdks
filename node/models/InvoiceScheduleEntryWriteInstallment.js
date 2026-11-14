import { d7161 as c0, d7162 as c1 } from '../descriptors/data/338.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d918 as c2 } from '../descriptors/data/46.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6233 as c4, d6234 as c5, d6235 as c6, d6236 as c7, d6237 as c8, d6238 as c9, d6239 as c10 } from '../descriptors/data/286.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7211 as c11, d7212 as c12, d7213 as c13, d7214 as c14, d7215 as c15 } from '../descriptors/data/340.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7218 as c16, d7219 as c17, d7221 as c18, d7223 as c19, d7224 as c20 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d918 as d918 } from '../descriptors/data/46.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d918;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteInstallment"]:c2(),["MoneyValue"]:c3(),["SharedCodec965"]:c4(),["SharedCodec966"]:c5(),["SharedCodec967"]:c6(),["SharedCodec968"]:c7(),["SharedCodec969"]:c8(),["SharedCodec970"]:c9(),["SharedCodec971"]:c10(),["SharedCodec975"]:c11(),["SharedCodec976"]:c12(),["SharedCodec977"]:c13(),["SharedCodec978"]:c14(),["SharedCodec979"]:c15(),["SharedCodec982"]:c16(),["SharedCodec983"]:c17(),["SharedCodec985"]:c18(),["SharedCodec987"]:c19(),["SharedCodec988"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteInstallment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
