import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7894 as c1 } from '../descriptors/data/379.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7918 as c2, d7919 as c3, d7920 as c4, d7921 as c5 } from '../descriptors/data/380.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7922 as c6, d7923 as c7, d7924 as c8, d7925 as c9, d7926 as c10, d7927 as c11, d7928 as c12, d7929 as c13 } from '../descriptors/data/381.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5697 as c14 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5697 as d5697 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5697;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec1754"]:c2(),["SharedCodec1755"]:c3(),["SharedCodec1756"]:c4(),["SharedCodec1757"]:c5(),["SharedCodec1758"]:c6(),["SharedCodec1759"]:c7(),["SharedCodec1760"]:c8(),["SharedCodec1761"]:c9(),["SharedCodec1762"]:c10(),["SharedCodec1763"]:c11(),["SharedCodec1764"]:c12(),["SharedCodec1765"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
