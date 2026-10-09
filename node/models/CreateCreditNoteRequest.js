import { d247 as c0, d500 as c1, d502 as c2, d323 as c3, d498 as c4, d499 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d247 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCreditNoteRequest"]:c0(),["CreditNoteCorrectionRequest"]:c1(),["CreditNoteLineRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec171"]:c4(),["SharedCodec172"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
