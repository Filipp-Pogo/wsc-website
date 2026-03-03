/*
 * Instagram Feed Component — 4B Design
 * Displays a curated grid of recent WSC Instagram posts using oEmbed iframes
 * Falls back to a visual grid linking to the Instagram profile
 */
import { useState } from "react";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";

interface InstaPost {
  id: string;
  url: string;
  caption: string;
  type: "image" | "reel";
  thumbnail: string;
  likes?: string;
  date: string;
}

const POSTS: InstaPost[] = [
  {
    id: "1",
    url: "https://www.instagram.com/reel/DMdnKqVhvlp/",
    caption: "This club has it all. Welcome to Woodinville Sports Club — 67 acres of tennis, golf, fitness, and pickleball.",
    type: "reel",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/about-campus_70f7e2b0.jpg",
    likes: "142",
    date: "Mar 2026",
  },
  {
    id: "2",
    url: "https://www.instagram.com/p/DVUAJfyErsA/",
    caption: "The range is open 24/7. Whether you're a seasoned golfer or just getting started, come hit some balls under the lights.",
    type: "image",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-range_9238eade.jpg",
    likes: "87",
    date: "Feb 2026",
  },
  {
    id: "3",
    url: "https://www.instagram.com/p/DUwoAj-jmb3/",
    caption: "Our first Tier 1 Women's Golf Clinic is in the books! Great turnout and even better swings.",
    type: "image",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-coach-daniel_026de368.jpg",
    likes: "33",
    date: "Feb 2026",
  },
  {
    id: "4",
    url: "https://www.instagram.com/p/DU4OMwDkl_E/",
    caption: "Welcome Stella Kim to the WSC golf family! Stella is a certified LPGA Teaching Professional with nearly a decade of experience.",
    type: "image",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-facility_1b19c898.jpg",
    likes: "56",
    date: "Feb 2026",
  },
  {
    id: "5",
    url: "https://www.instagram.com/p/DS3g2B2Fu1p/",
    caption: "Four state-of-the-art indoor golf simulators are arriving at WSC — just in time for the launch of our Tier 1 Junior Golf Academy.",
    type: "image",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-swinglab_317d4474.jpg",
    likes: "94",
    date: "Jan 2026",
  },
  {
    id: "6",
    url: "https://www.instagram.com/p/DPm-xfbElqx/",
    caption: "WSC's Tier 1 Coach Filipp traveled with Daniel Malacek to the ITF J200 Corpus Christi Tournament.",
    type: "image",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/tennis-lesson_f845dcaf.jpeg",
    likes: "71",
    date: "Jan 2026",
  },
  {
    id: "7",
    url: "https://www.instagram.com/p/DVPyb55Dclm/",
    caption: "Last chance, Woodinville. Our All-Access membership special ends February 28th. Save up to $150!",
    type: "image",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/fitness-training_dc50d579.jpeg",
    likes: "45",
    date: "Feb 2026",
  },
  {
    id: "8",
    url: "https://www.instagram.com/p/DVOo-q-EgdB/",
    caption: "Register for a full week of WSC Summer Training by February 28 and save 10% plus get a free Summer Training t-shirt.",
    type: "image",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/summer-kids_c9d92fda.jpeg",
    likes: "62",
    date: "Feb 2026",
  },
];

export default function InstagramFeed() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
      {POSTS.map((post) => (
        <a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group aspect-square overflow-hidden bg-parchment-mid block no-underline"
          onMouseEnter={() => setHoveredId(post.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Thumbnail */}
          <img
            src={post.thumbnail}
            alt={post.caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ filter: "saturate(0.85) brightness(0.95)" }}
            loading="lazy"
          />

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-dark-bg/70 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
              hoveredId === post.id ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Stats */}
            <div className="flex items-center gap-5 mb-4">
              {post.likes && (
                <div className="flex items-center gap-1.5">
                  <Heart size={14} className="text-parchment" fill="currentColor" />
                  <span className="text-parchment text-[13px] font-light">{post.likes}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <MessageCircle size={14} className="text-parchment" />
                <span className="text-parchment text-[13px] font-light">View</span>
              </div>
            </div>

            {/* Caption preview */}
            <p className="text-parchment/60 text-[11px] leading-[1.6] text-center line-clamp-3 max-w-[200px]">
              {post.caption}
            </p>

            {/* Type badge */}
            {post.type === "reel" && (
              <div className="absolute top-3 right-3 bg-volt-bright text-dark-bg text-[9px] tracking-[0.12em] uppercase px-2 py-0.5">
                Reel
              </div>
            )}

            {/* Instagram icon */}
            <div className="absolute bottom-3 right-3">
              <Instagram size={14} className="text-parchment/40" />
            </div>
          </div>

          {/* Date badge (always visible) */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-bg/50 to-transparent px-3 py-2 group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-parchment/50 text-[10px] tracking-[0.1em] uppercase">{post.date}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
