import { d416 as c0 } from '../descriptors/data/25.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8024 as c1, d8025 as c2, d8014 as c5 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8031 as c3 } from '../descriptors/data/347.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8662 as c4, d8659 as c8, d8660 as c9, d8661 as c10 } from '../descriptors/data/381.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c6 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8234 as c7 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8798 as c11, d8794 as c12 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10876 as c13, d10877 as c14, d10878 as c15, d10879 as c16, d10880 as c17, d10881 as c18, d10882 as c19, d10875 as c33 } from '../descriptors/data/511.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8689 as c20, d8681 as c21, d8690 as c22, d8682 as c23, d8683 as c24, d8691 as c25, d8692 as c26, d8693 as c27 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10891 as c28, d10892 as c29, d10893 as c30, d10894 as c31, d10896 as c32 } from '../descriptors/data/512.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10899 as c34, d10900 as c35 } from '../descriptors/data/513.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7944 as c36 } from '../descriptors/data/341.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d416 as d416 } from '../descriptors/data/25.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d416;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1453"]:c8(),["SharedCodec1454"]:c9(),["SharedCodec1455"]:c10(),["SharedCodec189"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2955"]:c13(),["SharedCodec2956"]:c14(),["SharedCodec2957"]:c15(),["SharedCodec2958"]:c16(),["SharedCodec2960"]:c17(),["SharedCodec2961"]:c18(),["SharedCodec2962"]:c19(),["SharedCodec479"]:c20(),["SharedCodec480"]:c21(),["SharedCodec481"]:c22(),["SharedCodec482"]:c23(),["SharedCodec483"]:c24(),["SharedCodec495"]:c25(),["SharedCodec496"]:c26(),["SharedCodec497"]:c27(),["SharedCodec579"]:c28(),["SharedCodec580"]:c29(),["SharedCodec581"]:c30(),["SharedCodec582"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
