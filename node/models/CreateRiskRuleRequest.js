import { d406 as c0 } from '../descriptors/data/24.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10807 as c2, d10808 as c3, d10809 as c4, d10810 as c5, d10811 as c6, d10812 as c7, d10814 as c8, d10815 as c9, d10816 as c10, d10817 as c11 } from '../descriptors/data/513.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d406 as d406 } from '../descriptors/data/24.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskRuleRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec569"]:c8(),["SharedCodec570"]:c9(),["SharedCodec571"]:c10(),["SharedCodec572"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
