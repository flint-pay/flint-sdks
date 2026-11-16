import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9720 as c1 } from '../descriptors/data/448.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9744 as c2, d9745 as c3, d9746 as c4, d9747 as c5, d9748 as c6, d9749 as c7, d9750 as c8, d9751 as c9, d9752 as c10, d9753 as c11, d9754 as c12, d9755 as c13 } from '../descriptors/data/449.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7522 as c14 } from '../descriptors/data/317.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7522 as d7522 } from '../descriptors/data/317.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7522;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3044"]:c2(),["SharedCodec3045"]:c3(),["SharedCodec3046"]:c4(),["SharedCodec3047"]:c5(),["SharedCodec3048"]:c6(),["SharedCodec3049"]:c7(),["SharedCodec3050"]:c8(),["SharedCodec3051"]:c9(),["SharedCodec3052"]:c10(),["SharedCodec3053"]:c11(),["SharedCodec3054"]:c12(),["SharedCodec3055"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
