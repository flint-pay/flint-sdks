import { d10070 as c0, d10071 as c1 } from '../descriptors/data/463.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10071 as d10071 } from '../descriptors/data/463.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10071;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentSourceCardSelection"]:c0(),["OrderPaymentSourceSelection"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentSourceSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
