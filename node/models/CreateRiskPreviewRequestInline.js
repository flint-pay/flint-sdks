import { d404 as c0 } from '../descriptors/data/24.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c1 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10791 as c2, d10792 as c3, d10793 as c4, d10794 as c5, d10795 as c6, d10796 as c7, d10798 as c10, d10799 as c11, d10800 as c12, d10801 as c13, d10789 as c15 } from '../descriptors/data/514.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10785 as c8, d10786 as c9, d10788 as c14 } from '../descriptors/data/513.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d404 as d404 } from '../descriptors/data/24.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequestInline"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec563"]:c8(),["SharedCodec564"]:c9(),["SharedCodec565"]:c10(),["SharedCodec566"]:c11(),["SharedCodec567"]:c12(),["SharedCodec568"]:c13(),["SharedCodec570"]:c14(),["SharedCodec571"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequestInline(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
