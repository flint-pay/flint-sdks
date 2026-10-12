import { d96 as c0, d1688 as c1, d323 as c2, d1686 as c3, d1687 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d96 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d96;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInvoiceLateFee"]:c0(),["InvoiceLateFeePolicy"]:c1(),["MoneyValue"]:c2(),["SharedCodec433"]:c3(),["SharedCodec434"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInvoiceLateFee(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
