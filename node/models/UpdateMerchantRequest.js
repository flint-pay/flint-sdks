import { d6041 as c0, d6039 as c3, d6040 as c4, d6038 as c6 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5951 as c1, d5952 as c2, d5942 as c5 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7594 as c7, d7595 as c8 } from '../descriptors/data/363.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5690 as c9 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5690 as d5690 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec1687"]:c5(),["SharedCodec1690"]:c6(),["SharedCodec1737"]:c7(),["SharedCodec1738"]:c8(),["UpdateMerchantRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMerchantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
