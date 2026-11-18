import { d8114 as c0, d8112 as c3, d8113 as c4, d8111 as c6 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8426 as c1, d8427 as c2 } from '../descriptors/data/370.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8015 as c5 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8936 as c7, d8937 as c8, d8938 as c9, d8939 as c10, d8940 as c11, d8941 as c12, d8942 as c13, d8943 as c14, d8944 as c15, d8945 as c16 } from '../descriptors/data/399.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7741 as c17 } from '../descriptors/data/325.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7741 as d7741 } from '../descriptors/data/325.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7741;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1715"]:c1(),["SharedCodec1716"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3071"]:c5(),["SharedCodec3074"]:c6(),["SharedCodec3090"]:c7(),["SharedCodec3091"]:c8(),["SharedCodec3092"]:c9(),["SharedCodec3093"]:c10(),["SharedCodec3094"]:c11(),["SharedCodec3095"]:c12(),["SharedCodec3096"]:c13(),["SharedCodec3097"]:c14(),["SharedCodec3098"]:c15(),["SharedCodec3099"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
