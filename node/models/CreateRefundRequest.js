import { d369 as c0 } from '../descriptors/data/22.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c1 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c2 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10432 as c3, d10433 as c4, d10435 as c7, d10436 as c8, d10437 as c9, d10438 as c10, d10439 as c11 } from '../descriptors/data/484.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9850 as c5, d9851 as c6 } from '../descriptors/data/451.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8994 as c12 } from '../descriptors/data/402.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10441 as c13, d10442 as c14, d10443 as c15, d10444 as c16 } from '../descriptors/data/485.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10455 as c17, d10456 as c18, d10457 as c19, d10458 as c20, d10459 as c21, d10460 as c22, d10461 as c23, d10462 as c24 } from '../descriptors/data/486.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10463 as c25 } from '../descriptors/data/487.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d369 as d369 } from '../descriptors/data/22.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2569"]:c13(),["SharedCodec2570"]:c14(),["SharedCodec2574"]:c15(),["SharedCodec2575"]:c16(),["SharedCodec537"]:c17(),["SharedCodec538"]:c18(),["SharedCodec539"]:c19(),["SharedCodec540"]:c20(),["SharedCodec541"]:c21(),["SharedCodec542"]:c22(),["SharedCodec543"]:c23(),["SharedCodec544"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
