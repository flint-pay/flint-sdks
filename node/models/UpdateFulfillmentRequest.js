import { d6041 as c0, d6039 as c1, d6040 as c2, d6038 as c5 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6349 as c3, d6350 as c16 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5942 as c4 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6865 as c6, d6866 as c7, d6867 as c8, d6868 as c9, d6869 as c10, d6870 as c11, d6871 as c12, d6872 as c13, d6873 as c14, d6874 as c15 } from '../descriptors/data/321.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5675 as c17 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5675 as d5675 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5675;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1687"]:c4(),["SharedCodec1690"]:c5(),["SharedCodec1706"]:c6(),["SharedCodec1707"]:c7(),["SharedCodec1708"]:c8(),["SharedCodec1709"]:c9(),["SharedCodec1710"]:c10(),["SharedCodec1711"]:c11(),["SharedCodec1712"]:c12(),["SharedCodec1713"]:c13(),["SharedCodec1714"]:c14(),["SharedCodec1715"]:c15(),["SharedCodec999"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
