import { d5942 as c0 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c1 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7866 as c2, d7867 as c3, d7868 as c4, d7869 as c5 } from '../descriptors/data/378.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5696 as c6 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5696 as d5696 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1687"]:c0(),["SharedCodec1690"]:c1(),["SharedCodec1750"]:c2(),["SharedCodec1751"]:c3(),["SharedCodec1752"]:c4(),["SharedCodec1753"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
