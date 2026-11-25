import { d8811 as c0, d8812 as c1, d8813 as c4, d8814 as c5, d8815 as c6 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c2 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c3 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10819 as c7 } from '../descriptors/data/514.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10826 as c8, d10827 as c9, d10828 as c10, d10830 as c11 } from '../descriptors/data/515.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10744 as c12, d10745 as c13, d10747 as c17, d10748 as c18, d10749 as c19, d10750 as c20, d10751 as c21, d10752 as c22, d10753 as c23 } from '../descriptors/data/509.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8923 as c14 } from '../descriptors/data/400.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10835 as c15, d10836 as c16 } from '../descriptors/data/516.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10754 as c24, d10755 as c25, d10756 as c26 } from '../descriptors/data/510.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10819 as d10819 } from '../descriptors/data/514.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10819;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ReturnProcessDecision"]:c8(),["ReturnProcessDispositionRequest"]:c9(),["ReturnProcessInspectionRequest"]:c10(),["ReturnProcessResolutionRequest"]:c11(),["ReturnReplacementLineItemRequest"]:c12(),["ReturnReplacementTaxRequest"]:c13(),["SharedCodec193"]:c14(),["SharedCodec2741"]:c15(),["SharedCodec2742"]:c16(),["SharedCodec2816"]:c17(),["SharedCodec2817"]:c18(),["SharedCodec2818"]:c19(),["SharedCodec2819"]:c20(),["SharedCodec2820"]:c21(),["SharedCodec2822"]:c22(),["SharedCodec2823"]:c23(),["SharedCodec2824"]:c24(),["SharedCodec565"]:c25(),["SharedCodec566"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
