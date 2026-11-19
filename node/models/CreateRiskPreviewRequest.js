import { d401 as c0 } from '../descriptors/data/24.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10760 as c2, d10761 as c3, d10762 as c4, d10763 as c5, d10764 as c6, d10765 as c7, d10754 as c8, d10755 as c9, d10767 as c10, d10768 as c11, d10769 as c12, d10770 as c13, d10756 as c14, d10757 as c15, d10758 as c16, d10759 as c17 } from '../descriptors/data/512.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d401 as d401 } from '../descriptors/data/24.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d401;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec562"]:c8(),["SharedCodec563"]:c9(),["SharedCodec564"]:c10(),["SharedCodec565"]:c11(),["SharedCodec566"]:c12(),["SharedCodec567"]:c13(),["SharedCodec568"]:c14(),["SharedCodec569"]:c15(),["SharedCodec570"]:c16(),["SharedCodec571"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
