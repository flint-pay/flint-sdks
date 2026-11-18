import { d10611 as c0, d10612 as c2, d10613 as c3 } from '../descriptors/data/497.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10627 as c1, d10614 as c4, d10615 as c5, d10616 as c6, d10617 as c7 } from '../descriptors/data/498.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10611 as d10611 } from '../descriptors/data/497.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10611;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2753"]:c2(),["SharedCodec2754"]:c3(),["SharedCodec2755"]:c4(),["SharedCodec2760"]:c5(),["SharedCodec2761"]:c6(),["SharedCodec2762"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
