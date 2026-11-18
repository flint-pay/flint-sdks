import { d9415 as c0 } from '../descriptors/data/424.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9465 as c1 } from '../descriptors/data/430.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9663 as c2, d9664 as c7 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9492 as c3, d9493 as c4, d9494 as c5, d9495 as c6 } from '../descriptors/data/433.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9415 as d9415 } from '../descriptors/data/424.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9415;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnResolutionPreviewRequest"]:c0(),["BuyerReturnReplacementLineItemRequest"]:c1(),["ReturnResolutionLineItemRequest"]:c2(),["SharedCodec163"]:c3(),["SharedCodec164"]:c4(),["SharedCodec165"]:c5(),["SharedCodec166"]:c6(),["SharedCodec98"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
