import { VStack } from "@chakra-ui/react";
import AsideFootnote from "@/components/Report/AsideFootnote";
import AsideCard from "@/components/Report/AsideCard";
// import type { ResponsiveImage } from "@/types";

// eslint-disable-next-line react/prop-types
// footnoteImage
export default function Aside({ footnote, insights }) {
  // test for now…
  // const insight = content.insights?[0];

  return (
    <VStack align="flex-start" spacing="w1">
      {footnote ? <AsideFootnote data={footnote} /> : null}
      {insights &&
        insights?.map((item) => <AsideCard key={item.id} item={item} />)}
    </VStack>
  );
}

// interface AsideProps {
//   // footnote?: AsideFootnoteProps;
//   footnote?: string;
//   // footnoteImage: AsideImageProps;
//   footnoteImage?: {
//     responsiveImage: ResponsiveImage;
//   };
//   insights?: Array<{
//     // item: AsideCardProps;
//     item: Array<{
//       id: string;
//       title?: string;
//       lede?: string;
//       slug?: string;
//       sources?: Array<{
//         slug: string;
//         title: string;
//       }>;
//       tags?: Array<{
//         slug: string;
//         name: string;
//       }>;
//     }>;
//   }>;
// }
