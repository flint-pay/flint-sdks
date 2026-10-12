import { d505 as c0, d1743 as c1, d323 as c2 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1743 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteRefundRequest"]:c0(),["IssueCreditNoteRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
