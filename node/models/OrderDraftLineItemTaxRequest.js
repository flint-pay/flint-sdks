import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3634 as c1, d3635 as c2, d3636 as c3, d3637 as c4 } from '../descriptors/data/150.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3635 as d3635 } from '../descriptors/data/150.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderDraftLineItemTaxCalculationRequest"]:c1(),["OrderDraftLineItemTaxRequest"]:c2(),["OrderDraftTaxComponentRequest"]:c3(),["OrderDraftTaxJurisdictionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
