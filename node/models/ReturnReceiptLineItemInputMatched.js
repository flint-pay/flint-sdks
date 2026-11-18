import { d1836 as c0 } from '../descriptors/data/92.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10627 as c1 } from '../descriptors/data/498.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10613 as c2 } from '../descriptors/data/497.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1836 as d1836 } from '../descriptors/data/92.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1836;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputMatched"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2754"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputMatched(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
