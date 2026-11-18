import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8234 as c1, d8227 as c3 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1498 as c2 } from '../descriptors/data/75.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10172 as c4, d10177 as c5, d10178 as c6 } from '../descriptors/data/470.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1498 as d1498 } from '../descriptors/data/75.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1498;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemInputCustomFixed"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2149"]:c4(),["SharedCodec2154"]:c5(),["SharedCodec2155"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemInputCustomFixed(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
