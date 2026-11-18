import { d9258 as c0 } from '../descriptors/data/416.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9277 as c1, d9278 as c2, d9279 as c3, d9280 as c4, d9281 as c5 } from '../descriptors/data/417.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9258 as d9258 } from '../descriptors/data/416.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1685"]:c1(),["SharedCodec1686"]:c2(),["SharedCodec1687"]:c3(),["SharedCodec1688"]:c4(),["SharedCodec1689"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
