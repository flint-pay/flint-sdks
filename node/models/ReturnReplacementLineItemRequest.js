import { d8731 as c0, d8732 as c1, d8733 as c3, d8734 as c4, d8735 as c5 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10657 as c6, d10658 as c7, d10660 as c9, d10661 as c10, d10662 as c11, d10663 as c12, d10664 as c13, d10665 as c14, d10666 as c15 } from '../descriptors/data/504.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8843 as c8 } from '../descriptors/data/396.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10667 as c16 } from '../descriptors/data/505.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10657 as d10657 } from '../descriptors/data/504.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10657;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnReplacementTaxRequest"]:c7(),["SharedCodec191"]:c8(),["SharedCodec2786"]:c9(),["SharedCodec2787"]:c10(),["SharedCodec2788"]:c11(),["SharedCodec2789"]:c12(),["SharedCodec2790"]:c13(),["SharedCodec2792"]:c14(),["SharedCodec2793"]:c15(),["SharedCodec2794"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
