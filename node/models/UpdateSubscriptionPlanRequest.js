import { d8024 as c0, d8025 as c1, d8014 as c4, d8016 as c16, d8017 as c17, d8015 as c18 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8031 as c2, d8036 as c19 } from '../descriptors/data/348.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8662 as c3, d8659 as c7, d8660 as c8, d8661 as c9 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c5 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8234 as c6 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8798 as c10, d8794 as c11 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10875 as c12, d10876 as c13, d10877 as c14, d10878 as c15, d10882 as c21, d10883 as c22, d10884 as c23, d10885 as c24, d10874 as c38 } from '../descriptors/data/512.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8358 as c20 } from '../descriptors/data/366.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8689 as c25, d8681 as c26, d8690 as c27, d8682 as c28, d8683 as c29, d8691 as c30, d8692 as c31, d8693 as c32 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10890 as c33, d10891 as c34, d10892 as c35, d10893 as c36, d10895 as c37 } from '../descriptors/data/513.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10898 as c39, d10900 as c41 } from '../descriptors/data/514.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7944 as c40 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7803 as c42 } from '../descriptors/data/330.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7803 as d7803 } from '../descriptors/data/330.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7803;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1453"]:c7(),["SharedCodec1454"]:c8(),["SharedCodec1455"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2954"]:c12(),["SharedCodec2955"]:c13(),["SharedCodec2956"]:c14(),["SharedCodec2957"]:c15(),["SharedCodec3069"]:c16(),["SharedCodec3070"]:c17(),["SharedCodec3071"]:c18(),["SharedCodec3073"]:c19(),["SharedCodec3075"]:c20(),["SharedCodec3201"]:c21(),["SharedCodec3202"]:c22(),["SharedCodec3203"]:c23(),["SharedCodec3204"]:c24(),["SharedCodec479"]:c25(),["SharedCodec480"]:c26(),["SharedCodec481"]:c27(),["SharedCodec482"]:c28(),["SharedCodec483"]:c29(),["SharedCodec495"]:c30(),["SharedCodec496"]:c31(),["SharedCodec497"]:c32(),["SharedCodec579"]:c33(),["SharedCodec580"]:c34(),["SharedCodec581"]:c35(),["SharedCodec582"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
