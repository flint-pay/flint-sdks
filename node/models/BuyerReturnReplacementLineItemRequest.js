import { d9465 as c0 } from '../descriptors/data/430.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9492 as c1, d9493 as c2, d9494 as c3, d9495 as c4 } from '../descriptors/data/433.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9465 as d9465 } from '../descriptors/data/430.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9465;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerReturnReplacementLineItemRequest"]:c0(),["SharedCodec163"]:c1(),["SharedCodec164"]:c2(),["SharedCodec165"]:c3(),["SharedCodec166"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
