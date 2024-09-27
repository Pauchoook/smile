import * as functions from "./files/functions.js";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "../scss/style.scss";
import spoller from "./files/spoller.js";
import sliders from "./files/sliders.js";
import burger from "./files/burger.js";
import tab from "./files/tab.js";
import modal from "./files/modal.js";
import select from "./files/select.js";
import beforeAfter from "./files/beforeAfter.js";
import map from "./files/map.js";
import more from "./files/more.js";
import fancy from "./files/fancy.js";

sliders();
fancy();
functions.isWebp();
functions.mediaAdaptive();
spoller();
burger();
tab();
modal();
select();
beforeAfter();
map();
more();