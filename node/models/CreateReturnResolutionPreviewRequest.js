import { d10726 as c0 } from '../descriptors/data/508.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8811 as c1, d8812 as c2, d8813 as c4, d8814 as c5, d8815 as c6 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c3 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10744 as c7, d10745 as c8, d10740 as c9, d10747 as c12, d10748 as c13, d10749 as c14, d10750 as c15, d10751 as c16, d10752 as c17, d10753 as c18, d10738 as c22, d10741 as c23, d10739 as c24, d10742 as c25, d10743 as c26 } from '../descriptors/data/509.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9807 as c10 } from '../descriptors/data/452.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8923 as c11 } from '../descriptors/data/400.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10754 as c19, d10755 as c20, d10756 as c21 } from '../descriptors/data/510.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9808 as c27 } from '../descriptors/data/453.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10726 as d10726 } from '../descriptors/data/508.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["ReturnReplacementTaxRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec193"]:c11(),["SharedCodec2816"]:c12(),["SharedCodec2817"]:c13(),["SharedCodec2818"]:c14(),["SharedCodec2819"]:c15(),["SharedCodec2820"]:c16(),["SharedCodec2822"]:c17(),["SharedCodec2823"]:c18(),["SharedCodec2824"]:c19(),["SharedCodec565"]:c20(),["SharedCodec566"]:c21(),["SharedCodec567"]:c22(),["SharedCodec568"]:c23(),["SharedCodec569"]:c24(),["SharedCodec570"]:c25(),["SharedCodec571"]:c26(),["SharedCodec99"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
