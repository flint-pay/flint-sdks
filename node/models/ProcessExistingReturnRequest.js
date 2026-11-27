import { d8811 as c0, d8812 as c1, d8813 as c4, d8814 as c5, d8815 as c6 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c2 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c3 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10819 as c7 } from '../descriptors/data/515.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1623 as c8 } from '../descriptors/data/81.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10826 as c9, d10827 as c10, d10828 as c11, d10829 as c12, d10830 as c13 } from '../descriptors/data/516.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10744 as c14, d10745 as c15, d10747 as c23, d10748 as c24, d10749 as c25, d10750 as c26, d10751 as c27, d10752 as c28, d10753 as c29 } from '../descriptors/data/510.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10677 as c16 } from '../descriptors/data/505.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8923 as c17 } from '../descriptors/data/401.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10680 as c18, d10681 as c19, d10682 as c20 } from '../descriptors/data/506.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10835 as c21, d10836 as c22 } from '../descriptors/data/517.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10754 as c30, d10755 as c32, d10756 as c33 } from '../descriptors/data/511.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9239 as c31 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1623 as d1623 } from '../descriptors/data/81.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1623;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ProcessExistingReturnRequest"]:c8(),["ReturnProcessDecision"]:c9(),["ReturnProcessDispositionRequest"]:c10(),["ReturnProcessInspectionRequest"]:c11(),["ReturnProcessReceiptRequest"]:c12(),["ReturnProcessResolutionRequest"]:c13(),["ReturnReplacementLineItemRequest"]:c14(),["ReturnReplacementTaxRequest"]:c15(),["ReturnSourceSystemRequest"]:c16(),["SharedCodec193"]:c17(),["SharedCodec2715"]:c18(),["SharedCodec2716"]:c19(),["SharedCodec2717"]:c20(),["SharedCodec2741"]:c21(),["SharedCodec2742"]:c22(),["SharedCodec2816"]:c23(),["SharedCodec2817"]:c24(),["SharedCodec2818"]:c25(),["SharedCodec2819"]:c26(),["SharedCodec2820"]:c27(),["SharedCodec2822"]:c28(),["SharedCodec2823"]:c29(),["SharedCodec2824"]:c30(),["SharedCodec462"]:c31(),["SharedCodec565"]:c32(),["SharedCodec566"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
