import { d370 as c0 } from '../descriptors/data/22.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10431 as c3, d10432 as c4, d10434 as c7, d10435 as c8, d10436 as c9, d10437 as c10, d10438 as c11 } from '../descriptors/data/485.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9849 as c5, d9850 as c6 } from '../descriptors/data/452.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8994 as c12 } from '../descriptors/data/403.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10440 as c13, d10441 as c14, d10442 as c15, d10443 as c16 } from '../descriptors/data/486.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10455 as c17, d10456 as c18 } from '../descriptors/data/487.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10462 as c19 } from '../descriptors/data/488.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d370 as d370 } from '../descriptors/data/22.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestAmount"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2568"]:c13(),["SharedCodec2569"]:c14(),["SharedCodec2573"]:c15(),["SharedCodec2574"]:c16(),["SharedCodec538"]:c17(),["SharedCodec539"]:c18(),["SplitReversalRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestAmount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
