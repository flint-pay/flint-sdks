import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9927 as c1 } from '../descriptors/data/460.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10013 as c2 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9417 as c3, d9418 as c4 } from '../descriptors/data/427.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9927 as d9927 } from '../descriptors/data/460.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9927;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxAssignment"]:c1(),["TaxCalculationRequestModel"]:c2(),["TaxComponentRequestModel"]:c3(),["TaxJurisdictionRequestModel"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemTaxAssignment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
