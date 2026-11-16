import { d1244 as c0 } from '../descriptors/data/62.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9493 as c1, d9494 as c2, d9495 as c3, d9496 as c4, d9497 as c5 } from '../descriptors/data/435.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9498 as c6, d9499 as c7, d9500 as c8, d9501 as c9, d9502 as c10 } from '../descriptors/data/436.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1244 as d1244 } from '../descriptors/data/62.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1784"]:c1(),["SharedCodec1785"]:c2(),["SharedCodec1786"]:c3(),["SharedCodec1787"]:c4(),["SharedCodec1788"]:c5(),["SharedCodec1789"]:c6(),["SharedCodec1790"]:c7(),["SharedCodec1791"]:c8(),["SharedCodec1792"]:c9(),["SharedCodec1793"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
