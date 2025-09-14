"use client";

import { useState } from "react";

interface LikeButtonProps {
  initialLikes: number;
}

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFloatingHeart, setShowFloatingHeart] = useState(false);

  const handleLike = () => {
    setIsAnimating(true);

    if (isLiked) {
      // Remove like
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      // Add like
      setLikes((prev) => prev + 1);
      setIsLiked(true);

      // Show floating heart animation
      setShowFloatingHeart(true);
      setTimeout(() => setShowFloatingHeart(false), 1000);
    }

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleLike}
        className={`
          group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ease-out
          transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2
          ${
            isLiked
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-2 border-red-500 shadow-lg hover:shadow-xl hover:from-red-600 hover:to-pink-600 focus:ring-red-500"
              : "bg-white text-gray-600 border-2 border-gray-300 hover:border-red-300 hover:text-red-500 hover:bg-red-50 focus:ring-red-300 shadow-sm hover:shadow-md"
          }
          ${isAnimating && isLiked ? "animate-heart-beat" : ""}
          ${isAnimating && !isLiked ? "animate-wiggle" : ""}
        `}
      >
        {/* Heart icon */}
        <span
          className={`
            text-lg transition-all duration-300 relative
            ${isAnimating ? "scale-125" : "scale-100"}
            ${isLiked ? "animate-bounce" : ""}
          `}
        >
          {isLiked ? "❤️" : "🤍"}
        </span>

        {/* Like count */}
        <span
          className={`
          font-semibold text-sm transition-all duration-300 min-w-[20px] text-center
          ${isLiked ? "text-white" : "text-gray-700"}
          ${isAnimating ? "animate-pulse" : ""}
        `}
        >
          {likes}
        </span>

        {/* Hover effect overlay */}
        <div
          className={`
          absolute inset-0 rounded-full transition-opacity duration-300
          ${
            isLiked
              ? "bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-20"
              : "bg-red-500 opacity-0 group-hover:opacity-10"
          }
        `}
        />
      </button>

      {/* Floating heart animation */}
      {showFloatingHeart && (
        <>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 pointer-events-none animate-float-up">
            <span className="text-red-500 text-lg">💖</span>
          </div>
          <div className="absolute -top-2 left-1/3 transform -translate-x-1/2 pointer-events-none animate-float-up delay-150">
            <span className="text-pink-500 text-sm">💕</span>
          </div>
          <div className="absolute -top-2 right-1/3 transform translate-x-1/2 pointer-events-none animate-float-up delay-300">
            <span className="text-red-400 text-sm">�</span>
          </div>
        </>
      )}

      {/* Pulse effect for likes */}
      {isLiked && isAnimating && (
        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30 pointer-events-none" />
      )}
    </div>
  );
}
