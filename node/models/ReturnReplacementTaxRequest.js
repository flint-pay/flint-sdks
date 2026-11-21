import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8733 as c1, d8734 as c2, d8735 as c3 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10658 as c4 } from '../descriptors/data/504.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10658 as d10658 } from '../descriptors/data/504.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequestModel"]:c1(),["OrderDraftTaxComponentRequestModel"]:c2(),["OrderDraftTaxJurisdictionRequestModel"]:c3(),["ReturnReplacementTaxRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
