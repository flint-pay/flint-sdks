import { d390 as c0 } from '../descriptors/data/23.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10611 as c1, d10612 as c7, d10613 as c8 } from '../descriptors/data/497.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10518 as c2, d10521 as c4, d10522 as c5 } from '../descriptors/data/491.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10627 as c3, d10614 as c9, d10615 as c10, d10616 as c11, d10617 as c12 } from '../descriptors/data/498.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10523 as c6 } from '../descriptors/data/492.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9111 as c13 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d390 as d390 } from '../descriptors/data/23.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2679"]:c4(),["SharedCodec2680"]:c5(),["SharedCodec2681"]:c6(),["SharedCodec2753"]:c7(),["SharedCodec2754"]:c8(),["SharedCodec2755"]:c9(),["SharedCodec2760"]:c10(),["SharedCodec2761"]:c11(),["SharedCodec2762"]:c12(),["SharedCodec450"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
