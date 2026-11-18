import { d159 as c0 } from '../descriptors/data/8.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d159 as d159 } from '../descriptors/data/8.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CashOutGiftCardRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCashOutGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
