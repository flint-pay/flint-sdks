import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10014 as c1, d10015 as c2, d10016 as c3 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10014 as d10014 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10014;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["TaxCalculationRequestRequest"]:c1(),["TaxComponentRequestRequest"]:c2(),["TaxJurisdictionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxCalculationRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
