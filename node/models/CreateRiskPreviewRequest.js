import { d403 as c0 } from '../descriptors/data/25.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10894 as c2, d10895 as c3, d10896 as c4, d10897 as c5, d10898 as c6, d10899 as c7, d10888 as c8, d10889 as c9, d10901 as c10, d10902 as c11, d10903 as c12, d10904 as c13, d10890 as c14, d10891 as c15, d10892 as c16, d10893 as c17 } from '../descriptors/data/519.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d403 as d403 } from '../descriptors/data/25.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec574"]:c8(),["SharedCodec575"]:c9(),["SharedCodec576"]:c10(),["SharedCodec577"]:c11(),["SharedCodec578"]:c12(),["SharedCodec579"]:c13(),["SharedCodec580"]:c14(),["SharedCodec581"]:c15(),["SharedCodec582"]:c16(),["SharedCodec583"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
