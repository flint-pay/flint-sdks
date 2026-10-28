import { d3320 as c0 } from '../descriptors/data/134.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3320 as d3320 } from '../descriptors/data/134.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3320;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteRefundRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
