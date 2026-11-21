import { d8731 as c0, d8732 as c1, d8733 as c3, d8734 as c4, d8735 as c5 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1849 as c6 } from '../descriptors/data/92.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10658 as c7, d10662 as c9 } from '../descriptors/data/504.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8843 as c8 } from '../descriptors/data/396.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1849 as d1849 } from '../descriptors/data/92.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1849;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementLineItemInputCustom"]:c6(),["ReturnReplacementTaxRequest"]:c7(),["SharedCodec191"]:c8(),["SharedCodec2788"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
