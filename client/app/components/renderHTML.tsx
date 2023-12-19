interface Props {
  htmlContent: string;
  classname?: string;
}

const Renderhtml = ({ htmlContent, classname }: Props) => {
  return (
    <div
      style={{ display: "block" }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className={classname}
    />
  );
};

export default Renderhtml;
