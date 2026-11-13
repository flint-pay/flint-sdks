import { d7121 as c0 } from '../descriptors/data/332.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6175 as c1, d6176 as c2, d6178 as c3, d6180 as c4 } from '../descriptors/data/279.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7165 as c5, d7166 as c6, d7167 as c7, d7168 as c8, d7169 as c9, d7170 as c10, d7171 as c11 } from '../descriptors/data/334.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7121 as d7121 } from '../descriptors/data/332.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7121;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec931"]:c1(),["SharedCodec932"]:c2(),["SharedCodec934"]:c3(),["SharedCodec936"]:c4(),["SharedCodec937"]:c5(),["SharedCodec938"]:c6(),["SharedCodec939"]:c7(),["SharedCodec940"]:c8(),["SharedCodec941"]:c9(),["SharedCodec942"]:c10(),["SharedCodec943"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
