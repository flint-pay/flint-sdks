import { d8731 as c0, d8732 as c1, d8733 as c4, d8734 as c5, d8735 as c6 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c2 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10743 as c7 } from '../descriptors/data/510.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10657 as c8, d10658 as c9, d10660 as c11, d10661 as c12, d10662 as c13, d10663 as c14, d10664 as c15, d10665 as c16, d10666 as c17 } from '../descriptors/data/504.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8843 as c10 } from '../descriptors/data/396.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10667 as c18, d10668 as c19, d10669 as c20 } from '../descriptors/data/505.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10743 as d10743 } from '../descriptors/data/510.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnProcessResolutionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["SharedCodec191"]:c10(),["SharedCodec2786"]:c11(),["SharedCodec2787"]:c12(),["SharedCodec2788"]:c13(),["SharedCodec2789"]:c14(),["SharedCodec2790"]:c15(),["SharedCodec2792"]:c16(),["SharedCodec2793"]:c17(),["SharedCodec2794"]:c18(),["SharedCodec558"]:c19(),["SharedCodec559"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
