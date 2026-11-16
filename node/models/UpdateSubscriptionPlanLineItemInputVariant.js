import { d7767 as c0 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7985 as c2 } from '../descriptors/data/348.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10551 as c3, d10552 as c4 } from '../descriptors/data/497.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8435 as c5, d8436 as c6, d8437 as c7, d8438 as c8, d8439 as c9, d8440 as c10, d8441 as c11, d8442 as c12 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7698 as c13 } from '../descriptors/data/331.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7559 as c14 } from '../descriptors/data/320.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7559 as d7559 } from '../descriptors/data/320.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7559;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec2862"]:c3(),["SharedCodec2863"]:c4(),["SharedCodec474"]:c5(),["SharedCodec475"]:c6(),["SharedCodec476"]:c7(),["SharedCodec477"]:c8(),["SharedCodec478"]:c9(),["SharedCodec490"]:c10(),["SharedCodec491"]:c11(),["SharedCodec492"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputVariant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
