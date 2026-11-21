import { d403 as c0 } from '../descriptors/data/24.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10807 as c2, d10808 as c3, d10809 as c4, d10810 as c5, d10811 as c6, d10812 as c7, d10801 as c8, d10802 as c9, d10814 as c10, d10815 as c11, d10816 as c12, d10817 as c13, d10803 as c14, d10804 as c15, d10805 as c16, d10806 as c17 } from '../descriptors/data/513.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d403 as d403 } from '../descriptors/data/24.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec567"]:c8(),["SharedCodec568"]:c9(),["SharedCodec569"]:c10(),["SharedCodec570"]:c11(),["SharedCodec571"]:c12(),["SharedCodec572"]:c13(),["SharedCodec573"]:c14(),["SharedCodec574"]:c15(),["SharedCodec575"]:c16(),["SharedCodec576"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
