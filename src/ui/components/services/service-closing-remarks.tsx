interface ServiceClosingRemarksProps {
  content: string;
}

export function ServiceClosingRemarks(props: ServiceClosingRemarksProps) {
  const { content } = props;

  return (
    <p className="text-base leading-8 text-(--TXT-LIGHT) sm:text-lg">
      {content}
     </p>
  );
}
