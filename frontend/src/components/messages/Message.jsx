import React from "react";

function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-33-128.png"
            alt="Profile Picture"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is up?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        22:54
      </div>
    </div>
  );
}

export default Message;
