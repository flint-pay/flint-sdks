import { d1092 as c0 } from '../descriptors/data/55.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8322 as c1 } from '../descriptors/data/364.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1092 as d1092 } from '../descriptors/data/55.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputDate"]:c0(),["SharedCodec1612"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputDate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
