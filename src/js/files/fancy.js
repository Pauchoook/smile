import { Fancybox } from "@fancyapps/ui";

export default function fancy() {
  Fancybox.bind('[data-fancybox="certificates"]', {});
  Fancybox.bind('[data-fancybox="reviews"]', {});
  Fancybox.bind('[data-fancybox="about"]', {});
  Fancybox.bind('[data-fancybox="comfort"]', {});
}
