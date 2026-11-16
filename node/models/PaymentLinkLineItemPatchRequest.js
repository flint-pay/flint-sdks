import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7985 as c1 } from '../descriptors/data/348.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9842 as c2 } from '../descriptors/data/454.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9868 as c3 } from '../descriptors/data/456.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9873 as c4, d9874 as c5, d9876 as c6, d9877 as c7, d9878 as c8, d9879 as c9, d9880 as c10, d9881 as c11 } from '../descriptors/data/457.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9882 as c12, d9883 as c13, d9884 as c14 } from '../descriptors/data/458.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9842 as d9842 } from '../descriptors/data/454.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec2083"]:c3(),["SharedCodec2088"]:c4(),["SharedCodec2089"]:c5(),["SharedCodec2091"]:c6(),["SharedCodec2107"]:c7(),["SharedCodec2108"]:c8(),["SharedCodec2109"]:c9(),["SharedCodec2110"]:c10(),["SharedCodec2111"]:c11(),["SharedCodec2112"]:c12(),["SharedCodec2113"]:c13(),["SharedCodec2114"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
