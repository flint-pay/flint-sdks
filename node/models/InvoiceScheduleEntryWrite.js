import { d7163 as c0, d7164 as c1, d7165 as c2 } from '../descriptors/data/337.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c3 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6231 as c4, d6232 as c5, d6233 as c6, d6234 as c7, d6235 as c8, d6236 as c9, d6237 as c10 } from '../descriptors/data/285.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7211 as c11, d7212 as c12, d7213 as c13, d7214 as c14, d7215 as c15 } from '../descriptors/data/339.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7216 as c16, d7217 as c17, d7218 as c18, d7219 as c19, d7220 as c20, d7221 as c21, d7222 as c22, d7223 as c23, d7224 as c24, d7225 as c25, d7226 as c26, d7227 as c27, d7228 as c28 } from '../descriptors/data/340.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7165 as d7165 } from '../descriptors/data/337.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7165;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec963"]:c4(),["SharedCodec964"]:c5(),["SharedCodec965"]:c6(),["SharedCodec966"]:c7(),["SharedCodec967"]:c8(),["SharedCodec968"]:c9(),["SharedCodec969"]:c10(),["SharedCodec973"]:c11(),["SharedCodec974"]:c12(),["SharedCodec975"]:c13(),["SharedCodec976"]:c14(),["SharedCodec977"]:c15(),["SharedCodec978"]:c16(),["SharedCodec979"]:c17(),["SharedCodec980"]:c18(),["SharedCodec981"]:c19(),["SharedCodec982"]:c20(),["SharedCodec983"]:c21(),["SharedCodec984"]:c22(),["SharedCodec985"]:c23(),["SharedCodec986"]:c24(),["SharedCodec987"]:c25(),["SharedCodec988"]:c26(),["SharedCodec989"]:c27(),["SharedCodec990"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
