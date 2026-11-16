import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9660 as c1, d9661 as c2 } from '../descriptors/data/444.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9660 as d9660 } from '../descriptors/data/444.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9660;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["TaxComponentRequestRequest"]:c1(),["TaxJurisdictionRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxComponentRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
