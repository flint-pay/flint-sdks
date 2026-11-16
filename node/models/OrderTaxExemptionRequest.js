import { d7154 as c0 } from '../descriptors/data/326.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8066 as c1, d8074 as c2, d8075 as c3, d8076 as c4, d8077 as c5, d8078 as c6, d8079 as c7, d8080 as c8 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6989 as c9, d6990 as c10, d6991 as c11, d6992 as c12 } from '../descriptors/data/317.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8066 as d8066 } from '../descriptors/data/377.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1488"]:c2(),["SharedCodec1489"]:c3(),["SharedCodec1490"]:c4(),["SharedCodec1491"]:c5(),["SharedCodec1492"]:c6(),["SharedCodec1493"]:c7(),["SharedCodec1494"]:c8(),["SharedCodec614"]:c9(),["SharedCodec615"]:c10(),["SharedCodec616"]:c11(),["SharedCodec617"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
