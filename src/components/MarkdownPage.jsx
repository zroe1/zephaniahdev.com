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
    const fetchContent = async () => {
      setIsLoading(true);
      setError("");
      try {
        const module = await import(`../writing/${slug}.md?raw`);
        setContent(module.default);
      } catch (e) {
        setError("Failed to load markdown.");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
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
          h2: ({ node, ...props }) => {
            const titleText = node.children
              .map((child) => {
                if (child.type === "text") {
                  return child.value;
                }
                return "";
              })
              .join("");
            return (
              <>
                <h2 {...props}>{renderNameWithNeonLetters(titleText)}</h2>
                <div className="neon-underline"></div>
              </>
            );
          },
          h3: ({ node, ...props }) => {
            const titleText = node.children
              .map((child) => {
                if (child.type === "text") {
                  return child.value;
                }
                return "";
              })
              .join("");
            return (
              <>
                <h3 {...props}>{renderNameWithNeonLetters(titleText)}</h3>
                <div className="neon-underline-pink"></div>
              </>
            );
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
