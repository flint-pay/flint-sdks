import { d500 as c0, d502 as c1, d323 as c2, d498 as c3, d499 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d502 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d502;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["CreditNoteLineRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec171"]:c3(),["SharedCodec172"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
