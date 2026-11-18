import { d355 as c0 } from '../descriptors/data/20.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10070 as c3, d10071 as c4 } from '../descriptors/data/463.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9958 as c5 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c6, d8226 as c7 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8994 as c8 } from '../descriptors/data/403.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10113 as c9, d10114 as c10, d10115 as c11, d10116 as c12, d10117 as c13, d10118 as c14, d10119 as c15, d10120 as c16, d10121 as c17, d10122 as c18, d10123 as c19, d10124 as c20, d10125 as c21, d10126 as c22, d10127 as c23, d10128 as c24 } from '../descriptors/data/466.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d355 as d355 } from '../descriptors/data/20.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec216"]:c8(),["SharedCodec511"]:c9(),["SharedCodec512"]:c10(),["SharedCodec513"]:c11(),["SharedCodec514"]:c12(),["SharedCodec515"]:c13(),["SharedCodec516"]:c14(),["SharedCodec517"]:c15(),["SharedCodec518"]:c16(),["SharedCodec519"]:c17(),["SharedCodec520"]:c18(),["SharedCodec521"]:c19(),["SharedCodec522"]:c20(),["SharedCodec523"]:c21(),["SharedCodec524"]:c22(),["SharedCodec525"]:c23(),["SharedCodec526"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
