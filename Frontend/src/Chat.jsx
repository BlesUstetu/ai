import { useState } from "react";
import { sendChat } from "./api";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const send = async () => {
    setError("");
    setReply("");
    if (!msg.trim()) return;

    try {
      setLoading(true);
      const data = await sendChat(msg);
      setReply(data.reply);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: 16, fontFamily: "system-ui, Arial" }}>
      <h1 style={{ marginBottom: 8 }}>AI Fullstack Chat</h1>
      <p style={{ marginTop: 0, opacity: 0.75 }}>React + FastAPI + OpenAI</p>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: 10, borderRadius: 10, border: "1px solid #ddd" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />
        <button
          onClick={send}
          disabled={loading}
          style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #ddd", cursor: "pointer" }}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <div style={{ marginTop: 18, padding: 14, border: "1px solid #eee", borderRadius: 14, minHeight: 120 }}>
        <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>Reply</div>
        <div style={{ whiteSpace: "pre-wrap" }}>{reply || (loading ? "..." : "")}</div>
      </div>
    </div>
  );
}
