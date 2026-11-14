import { d6021 as c0, d6019 as c1, d6020 as c2, d6018 as c6 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6315 as c3, d6316 as c4 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c5 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6837 as c7, d6838 as c8, d6839 as c9, d6840 as c10, d6841 as c11, d6842 as c12, d6843 as c13, d6844 as c14, d6845 as c15, d6846 as c16 } from '../descriptors/data/321.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5651 as c17 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5651 as d5651 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5651;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1002"]:c4(),["SharedCodec1692"]:c5(),["SharedCodec1695"]:c6(),["SharedCodec1711"]:c7(),["SharedCodec1712"]:c8(),["SharedCodec1713"]:c9(),["SharedCodec1714"]:c10(),["SharedCodec1715"]:c11(),["SharedCodec1716"]:c12(),["SharedCodec1717"]:c13(),["SharedCodec1718"]:c14(),["SharedCodec1719"]:c15(),["SharedCodec1720"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
