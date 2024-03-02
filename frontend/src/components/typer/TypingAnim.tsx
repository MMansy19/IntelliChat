import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Engage in Professional Conversations 💬",
        1000,
        "Empower Your Communication 🚀",
        1000,
        "Enhance Productivity with AI Assistants 🤖",
        1000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
        animation: "fadeInOut 6s infinite",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
