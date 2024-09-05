'use client'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="pt-[3rem] px-4 lg:px-[8rem]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="flex justify-center items-center text-center text-md mb-1 mx-4 lg:mx-0">
        Connecting our community with the world's best companies and institutions
        </div>
        <div className="overflow-hidden relative h-[6rem] mx-4 lg:mx-0 lg:h-[6rem] ">
          <InfiniteMovingCards
            items={logos}
            direction="right"
            speed="slow"
            className="absolute inset-0"
          />
        </div>
        <div className="overflow-hidden relative h-[6rem] lg:h-[6rem] mx-4 lg:mx-0">
          <InfiniteMovingCards
            items={logos2}
            direction="right"
            speed="slow"
            className="absolute inset-0"
          />
        </div>

        <div className="overflow-hidden relative h-[6rem] lg:h-[8rem] mb-6 mx-4 lg:mx-0">
          <InfiniteMovingCards
            items={logos3}
            direction="right"
            speed="slow"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
}

const logos = [
  { src: "https://framerusercontent.com/images/GBSZAlYEl2SwHzq0dObfIgTsZA.png?scale-down-to=1024", alt: "Logo 2" },
  { src: "https://framerusercontent.com/images/thsWiap5gkK7TCikwX2H5osl0SI.png?scale-down-to=1024", alt: "Logo 3" },
  { src: "https://framerusercontent.com/images/U0e0mIBkhyzMBmChOYUKWMDiPsc.png?scale-down-to=1024", alt: "Logo 4" },
  { src: "https://framerusercontent.com/images/V47U1pV0RpgrWXWEWj5WLtjoEc.png?scale-down-to=1024", alt: "Logo 5" },
  { src: "https://framerusercontent.com/images/GBSZAlYEl2SwHzq0dObfIgTsZA.png?scale-down-to=1024", alt: "Logo 7" },
  { src: "https://framerusercontent.com/images/thsWiap5gkK7TCikwX2H5osl0SI.png?scale-down-to=1024", alt: "Logo 8" },
  { src: "https://framerusercontent.com/images/U0e0mIBkhyzMBmChOYUKWMDiPsc.png?scale-down-to=1024", alt: "Logo 9" },
  { src: "https://framerusercontent.com/images/V47U1pV0RpgrWXWEWj5WLtjoEc.png?scale-down-to=1024", alt: "Logo 10" }
];

const logos2=[
  {
      "src": "https://framerusercontent.com/images/4v3NoNdJOiD9VYadMzqlL18PN2Q.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/E0qMIfDvBYTJqkpxqvRFT1us5w.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/Eyxx6dUCHP0PYAIPkYqm3YQNLc.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/4v3NoNdJOiD9VYadMzqlL18PN2Q.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/E0qMIfDvBYTJqkpxqvRFT1us5w.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/Eyxx6dUCHP0PYAIPkYqm3YQNLc.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/4v3NoNdJOiD9VYadMzqlL18PN2Q.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/E0qMIfDvBYTJqkpxqvRFT1us5w.png?scale-down-to=1024",
      "alt": ""
  },
  {
      "src": "https://framerusercontent.com/images/Eyxx6dUCHP0PYAIPkYqm3YQNLc.png?scale-down-to=1024",
      "alt": ""
  },

]

const logos3=[
  {
    "src": "https://framerusercontent.com/images/GoLXX57HRQqgngyZUXNnDDxEfw.png?scale-down-to=1024",
    "alt": "Example Image 1"
  },
  {
    "src": "https://framerusercontent.com/images/xQuB8G9zApzrPVbjC3bJM9dhBUM.png?scale-down-to=1024",
    "alt": "Example Image 2"
  },
  {
    "src": "https://framerusercontent.com/images/U5yDSHBGqywGA11uNQP6OA8gEI.png?scale-down-to=1024",
    "alt": "Example Image 4"
  },
  {
    "src": "https://framerusercontent.com/images/Ng2Nl8DjEOy0CYRP0XvFr3tYbk.png?scale-down-to=1024",
    "alt": "Example Image 5"
  },
  {
    "src": "https://framerusercontent.com/images/7WISGr3aXsUcET6LduZ8lVxTZ8.png?scale-down-to=1024",
    "alt": "Example Image 6"
  },
  {
    "src": "https://framerusercontent.com/images/GoLXX57HRQqgngyZUXNnDDxEfw.png?scale-down-to=1024",
    "alt": "Example Image 7"
  },
  {
    "src": "https://framerusercontent.com/images/xQuB8G9zApzrPVbjC3bJM9dhBUM.png?scale-down-to=1024",
    "alt": "Example Image 8"
  },

]
