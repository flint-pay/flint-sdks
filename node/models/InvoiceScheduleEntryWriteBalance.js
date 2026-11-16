import { d7191 as c0, d7192 as c1 } from '../descriptors/data/338.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d918 as c2 } from '../descriptors/data/45.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6259 as c4, d6260 as c5, d6261 as c6, d6262 as c7, d6263 as c8, d6264 as c9, d6265 as c10 } from '../descriptors/data/286.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7239 as c11, d7240 as c12, d7241 as c13, d7242 as c14, d7243 as c15 } from '../descriptors/data/340.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7247 as c16, d7249 as c17, d7254 as c18, d7255 as c19, d7256 as c20 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d918 as d918 } from '../descriptors/data/45.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d918;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteBalance"]:c2(),["MoneyValue"]:c3(),["SharedCodec963"]:c4(),["SharedCodec964"]:c5(),["SharedCodec965"]:c6(),["SharedCodec966"]:c7(),["SharedCodec967"]:c8(),["SharedCodec968"]:c9(),["SharedCodec969"]:c10(),["SharedCodec973"]:c11(),["SharedCodec974"]:c12(),["SharedCodec975"]:c13(),["SharedCodec976"]:c14(),["SharedCodec977"]:c15(),["SharedCodec981"]:c16(),["SharedCodec983"]:c17(),["SharedCodec988"]:c18(),["SharedCodec989"]:c19(),["SharedCodec990"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
