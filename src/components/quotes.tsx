import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee = ({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={`flex min-w-full gap-4`}
        style={{
          transform: `translateX(${direction === "left" ? "-" : ""}${isPaused ? contentWidth / 4 : 0}px)`,
          animation: `scroll-${direction} ${contentWidth / speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0">{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-250%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

interface ReviewCardProps {
  avatar: string;
  name: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ avatar, name, rating, review }: ReviewCardProps) => (
  <div className="w-80 p-4  rounded-lg border border-border shadow-sm backdrop-blur">
    <div className="flex items-center gap-3 mb-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-foreground">{name}</h3>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm text-muted-foreground">{review}</p>
  </div>
);

// Demo Component
export default function MarqueeDemo() {
  const reviews = [
    {
      id: 1,
      name: "Amina Talic",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "kodix is a game changer. 100% recommend!",
    },
    {
      id: 2,
      name: "Hamza Dzanic",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      review:
        "Great value for money. Would definitely recommend to others looking for a reliable solution.",
    },
    {
      id: 3,
      name: "Inseram Khan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "Not only does Kodix provide a quality service, but they are honest and diligent in their work as well. Highly recommend!",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Very impressed with the quality and attention to detail. A fantastic product overall.",
    },
  ];

  return (
    <div className="  flex flex-col gap-8 items-center justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-2">
          <Marquee direction="left" className="py-4" speed={50}>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                avatar={review.avatar}
                name={review.name}
                rating={review.rating}
                review={review.review}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
