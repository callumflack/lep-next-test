import { VStack } from "@chakra-ui/react";
import AsideFootnote, {
  AsideFootnoteProps,
} from "@/components/Report/AsideFootnote";
import AsideImage, { AsideImageProps } from "@/components/Report/AsideImage";
import AsideCard, { AsideCardProps } from "@/components/Report/AsideCard";

// eslint-disable-next-line react/prop-types
export default function Aside({ content }: AsideProps) {
  // test for now…
  // const insight = content.insights?[0];

  return (
    <VStack align="flex-start" spacing="w1">
      {content.footnote && <AsideFootnote data={content.footnote} />}
      {content.footnoteImage && <AsideImage data={content.footnoteImage} />}
      {content.insights &&
        content.insights?.map((item) => (
          <AsideCard key={item.id} item={item} />
        ))}
    </VStack>
  );
}

interface AsideProps {
  content: {
    footnote: AsideFootnoteProps;
    footnoteImage: AsideImageProps;
    insights: Array<{
      item: AsideCardProps;
    }>;
  };
}
