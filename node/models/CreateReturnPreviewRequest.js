import { d9787 as c0, d9789 as c9, d9791 as c10, d9807 as c14, d9796 as c16, d9798 as c17, d9799 as c18, d9800 as c19, d9805 as c37, d9806 as c38 } from '../descriptors/data/452.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d386 as c1 } from '../descriptors/data/23.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10726 as c2, d10736 as c28, d10737 as c29 } from '../descriptors/data/508.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8811 as c3, d8812 as c4, d8813 as c6, d8814 as c7, d8815 as c8 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c5 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10744 as c11, d10745 as c12, d10740 as c13, d10747 as c20, d10748 as c21, d10749 as c22, d10750 as c23, d10751 as c24, d10752 as c25, d10753 as c26, d10738 as c32, d10741 as c33, d10739 as c34, d10742 as c35, d10743 as c36 } from '../descriptors/data/509.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8923 as c15 } from '../descriptors/data/400.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10754 as c27, d10755 as c30, d10756 as c31 } from '../descriptors/data/510.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9808 as c39 } from '../descriptors/data/453.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d386 as d386 } from '../descriptors/data/23.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d386;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["OrderDraftLineItemTaxCalculationRequestModel"]:c6(),["OrderDraftTaxComponentRequestModel"]:c7(),["OrderDraftTaxJurisdictionRequestModel"]:c8(),["ReturnEligibilityLineItemRequestModel"]:c9(),["ReturnEligibilitySelectionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnReplacementTaxRequest"]:c12(),["ReturnResolutionAdjustmentRequest"]:c13(),["ReturnResolutionLineItemRequest"]:c14(),["SharedCodec193"]:c15(),["SharedCodec2704"]:c16(),["SharedCodec2706"]:c17(),["SharedCodec2707"]:c18(),["SharedCodec2708"]:c19(),["SharedCodec2816"]:c20(),["SharedCodec2817"]:c21(),["SharedCodec2818"]:c22(),["SharedCodec2819"]:c23(),["SharedCodec2820"]:c24(),["SharedCodec2822"]:c25(),["SharedCodec2823"]:c26(),["SharedCodec2824"]:c27(),["SharedCodec563"]:c28(),["SharedCodec564"]:c29(),["SharedCodec565"]:c30(),["SharedCodec566"]:c31(),["SharedCodec567"]:c32(),["SharedCodec568"]:c33(),["SharedCodec569"]:c34(),["SharedCodec570"]:c35(),["SharedCodec571"]:c36(),["SharedCodec96"]:c37(),["SharedCodec98"]:c38(),["SharedCodec99"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
