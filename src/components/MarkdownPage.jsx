import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "./MarkdownPage.css";
import { renderNameWithNeonLetters } from "./Home/Home";

export default function MarkdownPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError("");
    fetch(`/writing/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load markdown: ${res.status}`);
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [slug]);

  if (isLoading) return <div className="markdown-page">Loading…</div>;
  if (error) return <div className="markdown-page">Error: {error}</div>;

  return (
    <div className="markdown-page">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          h1: ({ node, ...props }) => {
            const titleText = node.children
              .map((child) => {
                if (child.type === "text") {
                  return child.value;
                }
                return "";
              })
              .join("");
            return <h1 {...props}>{renderNameWithNeonLetters(titleText)}</h1>;
          },
          img: ({ node, ...props }) => (
            <img {...props} style={{ maxWidth: "100%", height: "auto" }} />
          ),
          code: ({ inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
