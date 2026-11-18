import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8234 as c1, d8227 as c3 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10146 as c2 } from '../descriptors/data/468.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10172 as c4, d10177 as c5, d10178 as c6 } from '../descriptors/data/470.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10180 as c7, d10181 as c8, d10182 as c9, d10183 as c10, d10184 as c11, d10185 as c12, d10186 as c13, d10187 as c14, d10188 as c15 } from '../descriptors/data/471.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10146 as d10146 } from '../descriptors/data/468.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10146;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2149"]:c4(),["SharedCodec2154"]:c5(),["SharedCodec2155"]:c6(),["SharedCodec2157"]:c7(),["SharedCodec2173"]:c8(),["SharedCodec2174"]:c9(),["SharedCodec2175"]:c10(),["SharedCodec2176"]:c11(),["SharedCodec2177"]:c12(),["SharedCodec2178"]:c13(),["SharedCodec2179"]:c14(),["SharedCodec2180"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
