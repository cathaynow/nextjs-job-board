import ReactMarkDown from "react-markdown";

interface MarkDownProps {
  children: string;
}

export default function Markdown({ children }: MarkDownProps) {
  return (
    <ReactMarkDown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-green-500 underline" target="_blank" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkDown>
  );
}
