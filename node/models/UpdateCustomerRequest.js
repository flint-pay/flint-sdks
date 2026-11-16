import { d8184 as c0, d8175 as c1, d8176 as c2, d8185 as c7, d8186 as c8 } from '../descriptors/data/359.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7865 as c3, d7866 as c12 } from '../descriptors/data/342.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7769 as c4, d7770 as c5, d7768 as c6 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8143 as c9, d8144 as c10, d8145 as c11 } from '../descriptors/data/357.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7491 as c13 } from '../descriptors/data/314.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7491 as d7491 } from '../descriptors/data/314.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7491;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1704"]:c1(),["SharedCodec1705"]:c2(),["SharedCodec2"]:c3(),["SharedCodec2975"]:c4(),["SharedCodec2976"]:c5(),["SharedCodec2977"]:c6(),["SharedCodec2982"]:c7(),["SharedCodec2983"]:c8(),["SharedCodec2984"]:c9(),["SharedCodec2985"]:c10(),["SharedCodec2986"]:c11(),["SharedCodec3"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
