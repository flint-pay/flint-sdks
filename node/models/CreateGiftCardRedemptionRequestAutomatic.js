import { d297 as c0 } from '../descriptors/data/15.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8994 as c2 } from '../descriptors/data/403.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9053 as c3 } from '../descriptors/data/406.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d297 as d297 } from '../descriptors/data/15.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d297;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRedemptionRequestAutomatic"]:c0(),["MoneyValue"]:c1(),["SharedCodec216"]:c2(),["SharedCodec443"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRedemptionRequestAutomatic(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
