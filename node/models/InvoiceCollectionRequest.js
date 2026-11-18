import { d9250 as c0, d9256 as c2, d9261 as c6, d9262 as c7, d9263 as c8, d9264 as c9, d9265 as c10, d9266 as c11 } from '../descriptors/data/416.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9363 as c1 } from '../descriptors/data/421.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c3 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8316 as c4, d8317 as c5 } from '../descriptors/data/364.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9267 as c12 } from '../descriptors/data/417.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9250 as d9250 } from '../descriptors/data/416.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1495"]:c4(),["SharedCodec1496"]:c5(),["SharedCodec1517"]:c6(),["SharedCodec1518"]:c7(),["SharedCodec1519"]:c8(),["SharedCodec1522"]:c9(),["SharedCodec1523"]:c10(),["SharedCodec1524"]:c11(),["SharedCodec1525"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
