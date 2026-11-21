import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8733 as c1, d8734 as c3, d8735 as c4 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8715 as c2 } from '../descriptors/data/389.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8715 as d8715 } from '../descriptors/data/389.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8715;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequestModel"]:c1(),["OrderDraftLineItemTaxRequestModel"]:c2(),["OrderDraftTaxComponentRequestModel"]:c3(),["OrderDraftTaxJurisdictionRequestModel"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemTaxRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
