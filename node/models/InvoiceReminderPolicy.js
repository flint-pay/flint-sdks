import { d10831 as c0, d10832 as c1 } from '../descriptors/data/509.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10831 as d10831 } from '../descriptors/data/509.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10831;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceReminderPolicy"]:c0(),["InvoiceReminderRule"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
