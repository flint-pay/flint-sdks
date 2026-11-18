import { d1117 as c0 } from '../descriptors/data/56.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8296 as c1, d8297 as c2 } from '../descriptors/data/363.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1117 as d1117 } from '../descriptors/data/56.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1117;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationOnReceiptRequest"]:c0(),["SharedCodec1634"]:c1(),["SharedCodec1635"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationOnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
