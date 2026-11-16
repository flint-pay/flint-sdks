import { d7191 as c0, d7192 as c1, d7193 as c2 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6259 as c4, d6260 as c5, d6261 as c6, d6262 as c7, d6263 as c8, d6264 as c9, d6265 as c10 } from '../descriptors/data/286.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7239 as c11, d7240 as c12, d7241 as c13, d7242 as c14, d7243 as c15 } from '../descriptors/data/340.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7244 as c16, d7245 as c17, d7246 as c18, d7247 as c19, d7248 as c20, d7249 as c21, d7250 as c22, d7251 as c23, d7252 as c24, d7253 as c25, d7254 as c26, d7255 as c27, d7256 as c28 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7193 as d7193 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec963"]:c4(),["SharedCodec964"]:c5(),["SharedCodec965"]:c6(),["SharedCodec966"]:c7(),["SharedCodec967"]:c8(),["SharedCodec968"]:c9(),["SharedCodec969"]:c10(),["SharedCodec973"]:c11(),["SharedCodec974"]:c12(),["SharedCodec975"]:c13(),["SharedCodec976"]:c14(),["SharedCodec977"]:c15(),["SharedCodec978"]:c16(),["SharedCodec979"]:c17(),["SharedCodec980"]:c18(),["SharedCodec981"]:c19(),["SharedCodec982"]:c20(),["SharedCodec983"]:c21(),["SharedCodec984"]:c22(),["SharedCodec985"]:c23(),["SharedCodec986"]:c24(),["SharedCodec987"]:c25(),["SharedCodec988"]:c26(),["SharedCodec989"]:c27(),["SharedCodec990"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
