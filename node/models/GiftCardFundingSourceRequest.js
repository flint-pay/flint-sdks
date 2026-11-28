import { d876 as c0 } from '../descriptors/data/48.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9141 as c1, d9142 as c2, d9143 as c3, d9144 as c4, d9145 as c5, d9146 as c6, d9147 as c7, d9148 as c8, d9149 as c9, d9150 as c10, d9151 as c11, d9152 as c12, d9153 as c13, d9154 as c14, d9155 as c15, d9156 as c16 } from '../descriptors/data/415.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9157 as c17 } from '../descriptors/data/416.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d876 as d876 } from '../descriptors/data/48.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d876;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec434"]:c1(),["SharedCodec435"]:c2(),["SharedCodec436"]:c3(),["SharedCodec437"]:c4(),["SharedCodec438"]:c5(),["SharedCodec439"]:c6(),["SharedCodec440"]:c7(),["SharedCodec441"]:c8(),["SharedCodec442"]:c9(),["SharedCodec443"]:c10(),["SharedCodec444"]:c11(),["SharedCodec445"]:c12(),["SharedCodec446"]:c13(),["SharedCodec447"]:c14(),["SharedCodec448"]:c15(),["SharedCodec449"]:c16(),["SharedCodec450"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
