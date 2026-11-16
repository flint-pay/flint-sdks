import { d7777 as c0, d7778 as c1, d7767 as c4, d7769 as c16, d7770 as c17, d7768 as c18 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7784 as c2, d7789 as c19 } from '../descriptors/data/337.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8411 as c3, d8408 as c7, d8409 as c8, d8410 as c9 } from '../descriptors/data/371.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c5 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7985 as c6 } from '../descriptors/data/348.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8547 as c10, d8543 as c11 } from '../descriptors/data/379.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10549 as c12, d10550 as c13, d10551 as c14, d10552 as c15, d10548 as c38 } from '../descriptors/data/497.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8108 as c20 } from '../descriptors/data/355.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10556 as c21, d10557 as c22, d10558 as c23, d10559 as c24 } from '../descriptors/data/498.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8435 as c25, d8436 as c26, d8437 as c27, d8438 as c28, d8439 as c29, d8440 as c30, d8441 as c31, d8442 as c32 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10564 as c33, d10565 as c34, d10566 as c35, d10567 as c36, d10569 as c37, d10572 as c39, d10574 as c41 } from '../descriptors/data/499.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7698 as c40 } from '../descriptors/data/331.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7560 as c42 } from '../descriptors/data/320.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7560 as d7560 } from '../descriptors/data/320.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7560;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1442"]:c7(),["SharedCodec1443"]:c8(),["SharedCodec1444"]:c9(),["SharedCodec184"]:c10(),["SharedCodec185"]:c11(),["SharedCodec2860"]:c12(),["SharedCodec2861"]:c13(),["SharedCodec2862"]:c14(),["SharedCodec2863"]:c15(),["SharedCodec2975"]:c16(),["SharedCodec2976"]:c17(),["SharedCodec2977"]:c18(),["SharedCodec2979"]:c19(),["SharedCodec2981"]:c20(),["SharedCodec3106"]:c21(),["SharedCodec3107"]:c22(),["SharedCodec3108"]:c23(),["SharedCodec3109"]:c24(),["SharedCodec474"]:c25(),["SharedCodec475"]:c26(),["SharedCodec476"]:c27(),["SharedCodec477"]:c28(),["SharedCodec478"]:c29(),["SharedCodec490"]:c30(),["SharedCodec491"]:c31(),["SharedCodec492"]:c32(),["SharedCodec573"]:c33(),["SharedCodec574"]:c34(),["SharedCodec575"]:c35(),["SharedCodec576"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
