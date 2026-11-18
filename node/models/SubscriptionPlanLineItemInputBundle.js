import { d8014 as c0 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c1 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8234 as c2 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10876 as c3, d10877 as c4 } from '../descriptors/data/511.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8689 as c5, d8681 as c6, d8690 as c7, d8682 as c8, d8683 as c9, d8691 as c10, d8692 as c11, d8693 as c12 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7619 as c13 } from '../descriptors/data/318.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7944 as c14 } from '../descriptors/data/341.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7619 as d7619 } from '../descriptors/data/318.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7619;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec2955"]:c3(),["SharedCodec2956"]:c4(),["SharedCodec479"]:c5(),["SharedCodec480"]:c6(),["SharedCodec481"]:c7(),["SharedCodec482"]:c8(),["SharedCodec483"]:c9(),["SharedCodec495"]:c10(),["SharedCodec496"]:c11(),["SharedCodec497"]:c12(),["SubscriptionPlanLineItemInputBundle"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
