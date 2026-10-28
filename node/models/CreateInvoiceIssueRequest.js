import { d4135 as c0 } from '../descriptors/data/176.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4135 as d4135 } from '../descriptors/data/176.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoiceIssueRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoiceIssueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
